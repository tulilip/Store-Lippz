const axios = require('axios');
const BodyForm = require('form-data');
const Jimp = require('jimp');
const cheerio = require('cheerio')

async function remini(input) {
  const image = await Jimp.read(input);
  const buffer = await new Promise((resolve, reject) => {
    image.getBuffer(Jimp.MIME_JPEG, (err, buf) => {
      if (err) {
        reject('Terjadi error saat mengambil data.');
      } else {
        resolve(buf);
      }
    });
  });
  const form = new BodyForm();
  form.append('image', buffer, { filename: 'remini.jpg' });
  try {
    const { data } = await axios.post(`https://tools.betabotz.eu.org/ai/remini`, form, {
      headers: {
        ...form.getHeaders(),
        'accept': 'application/json',
      },
    });
    var res = {
      image_data: data.result,
      image_size: data.size
    };
    return res;
  } catch (error) {
    console.error('Identifikasi Gagal:', error);
    return 'Identifikasi Gagal';
  }
}


module.exports = { remini }