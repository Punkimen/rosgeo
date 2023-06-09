let project_folder = "dist";
let source_folder = "#src";

let fs = require("fs");

let path = {
	build: {
		html: project_folder + "/",
		css: project_folder + "/css/",
		js: project_folder + "/js/",
		img: project_folder + "/img/",
		fonts: project_folder + "/fonts/",
		video: project_folder + "/video/",
		php: project_folder + "/",
	},
	src: {
		html: [
			source_folder + "/html/**/*.html",
			"!" + source_folder + "/html/**/_*.html",
		],
		// css: source_folder + '/scss/style.scss',
		css: [
			source_folder + "/scss/**/*.scss",
			"!" + source_folder + "/scss/**/_*.scss",
		],
		// js: source_folder + '/js/script.js',
		js: [source_folder + "/js/**/*.js", "!" + source_folder + "/js/_*.js"],
		img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
		fonts: source_folder + "/fonts/*.ttf",
		video: source_folder + "/video/*.mp4",
		php: source_folder + "/mail/**/*.php",
	},
	watch: {
		html: source_folder + "/**/*.html",
		css: source_folder + "/scss/**/*.scss",
		js: source_folder + "/js/**/*.js",
		img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
		svg: source_folder + "/iconsprite/*.svg",
		php: source_folder + "/mail/**/*.php",
	},
	clean: "./" + project_folder + "/",
};
let {src, dest} = require("gulp"),
	gulp = require("gulp"),
	browsersync = require("browser-sync").create(),
	fileinclude = require("gulp-file-include"),
	del = require("del"),
	scss = require("gulp-sass")(require("sass")),
	autoprefix = require("gulp-autoprefixer"),
	group_media = require("gulp-group-css-media-queries"),
	clean_css = require("gulp-clean-css"),
	rename = require("gulp-rename"),
	uglify = require("gulp-uglify-es").default,
	imagemin = require("gulp-imagemin"),
	webp = require("gulp-webp"),
	newer = require("gulp-newer"),
	ttf2woff = require("gulp-ttf2woff"),
	ttf2woff2 = require("gulp-ttf2woff2"),
	svgSprite = require("gulp-svg-sprite");

function browserSync(params) {
	browsersync.init({
		server: {
			baseDir: "./" + project_folder + "/",
		},
		port: 3000,
		notify: false,
	});
}
function html() {
	return src(path.src.html)
		.pipe(fileinclude())
		.pipe(dest(path.build.html))
		.pipe(browsersync.stream());
}

function css() {
	return src(path.src.css)
		.pipe(
			scss({
				outputStyle: "expanded",
			}),
		)
		.pipe(
			autoprefix({
				overrideBrowseslist: ["last 10 version"],
				cascade: true,
			}),
		)
		.pipe(group_media())
		.pipe(dest(path.build.css))
		.pipe(clean_css())
		.pipe(
			rename({
				extname: ".min.css",
			}),
		)
		.pipe(dest(path.build.css))
		.pipe(browsersync.stream());
}
function js() {
	return src(path.src.js)
		.pipe(fileinclude())
		.pipe(dest(path.build.js))
		.pipe(uglify())
		.pipe(
			rename({
				extname: ".min.js",
			}),
		)
		.pipe(dest(path.build.js))
		.pipe(browsersync.stream());
}
function images() {
	return src(path.src.img)
		.pipe(webp())
		.pipe(src(path.src.img))
		.pipe(
			imagemin([
				imagemin.gifsicle({interlaced: true}),
				imagemin.mozjpeg({quality: 9, progressive: true}),
				imagemin.optipng({optimizationLevel: 3}),
				imagemin.svgo({
					plugins: [{removeViewBox: true}, {cleanupIDs: false}],
				}),
			]),
		)
		.pipe(dest(path.build.img))
		.pipe(src(path.src.img))
		.pipe(dest(path.build.img))
		.pipe(browsersync.stream());
}
function svg() {
	return gulp
		.src([source_folder + "/iconsprite/*.svg"])
		.pipe(
			svgSprite({
				mode: {
					stack: {
						sprite: "../icons/icons.svg",
						example: false,
					},
				},
			}),
		)
		.pipe(dest(path.build.img))
		.pipe(browsersync.stream());
}
function fonts() {
	src(path.src.fonts).pipe(ttf2woff()).pipe(dest(path.build.fonts));
	return src(path.src.fonts).pipe(ttf2woff2()).pipe(dest(path.build.fonts));
}
function video() {
	return src(path.src.video).pipe(dest(path.build.video));
}
function php() {
	return src(path.src.php)
		.pipe(dest(path.build.php))
		.pipe(browsersync.stream());
}

function fontsStyle(params) {
	let file_content = fs.readFileSync(source_folder + "/scss/_fonts.scss");
	if (file_content == "") {
		fs.writeFile(source_folder + "/scss/_fonts.scss", "", cb);
		return fs.readdir(path.build.fonts, function (err, items) {
			if (items) {
				let c_fontname;
				for (var i = 0; i < items.length; i++) {
					let fontname = items[i].split(".");
					fontname = fontname[0];
					if (c_fontname != fontname) {
						fs.appendFile(
							source_folder + "/scss/_fonts.scss",
							'@include font("' +
								fontname +
								'", "' +
								fontname +
								'", "400", "normal");\r\n',
							cb,
						);
					}
					c_fontname = fontname;
				}
			}
		});
	}
}
function cb() {}

function watchFiles() {
	gulp.watch([path.watch.html], html);
	gulp.watch([path.watch.css], css);
	gulp.watch([path.watch.js], js);
	gulp.watch([path.watch.img], images);
	gulp.watch([path.watch.svg], svg);
	gulp.watch([path.watch.php], php);
}

function clean() {
	return del(path.clean);
}

let build = gulp.series(
	clean,
	gulp.parallel(js, css, html, images, fonts, svg, video, php),
	fontsStyle,
);
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.fontsStyle = fontsStyle;
exports.fonts = fonts;
exports.video = video;
exports.php = php;
php;
exports.svg = svg;
exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;
