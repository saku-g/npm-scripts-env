import imagemin from 'imagemin-keep-folder';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import imageminGifsicle from 'imagemin-gifsicle';
import imageminSvgo from 'imagemin-svgo';
import imageminWebp from 'imagemin-webp';

/**
 * srcフォルダの画像ファイルを軽量化した後、webpに変換
 */
imagemin(['./src/assets/img/**/*.{jpg,jpeg,png,gif,svg}'], {
  plugins: [imageminMozjpeg(), imageminPngquant(), imageminGifsicle(), imageminSvgo()],
  replaceOutputDir: (output) => {
    return output.replace(/img\//, '../../public/assets/img/');
  },
}).then(() => {
  imagemin(['public/assets/img/**/*'], {
    use: [imageminWebp({ quality: 50 })],
  });
  // console.log('Images optimized!');
});
