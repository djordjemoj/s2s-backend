const mongoose = require('mongoose')

//zelje i info logistika
// const stavkeZelja = {
//   panel: {
//     type: {
//       staBiCuli: {
//         type: String,
//         default: '',
//       },
//       ocena: {
//         type: Number,
//         default: 0,
//         min: 0,
//         max: 25,
//       },
//     },
//     default: {},
//   },
//   techChallenge: {
//     emailFon: {
//       type: String,
//       default: '',
//     },
//     prethodnoIskustvo: {
//       type: String,
//       default: '',
//     },
//     tehnologije: {
//       type: String,
//       default: '',
//     },
//     saKim: {
//       type: String,
//       default: '',
//     },
//     kompanije: [
//       {
//         type: String,
//       },
//     ],
//   },
//   radionice: {
//     sveRadionice: [
//       {
//         type: String,
//       },
//     ],
//     motivaciono: {
//       type: String,
//     },
//   },
//   speedDating: [
//     {
//       type: String,
//     },
//   ],
// }

const infoZaLogistiku = {
  // radionica: {
  //   type: String,
  //   default: '',
  // },
  // panel: {
  //   type: Boolean,
  //   default: false,
  // },
  // techChallenge: {
  //   type: String,
  //   default: '',
  // },
  // speedDating: {
  //   type: String,
  //   default: '',
  // },
//OVO JE INFO ZA LOG< NE ZNAM STA MI SVE TREBA ZA SAD TEST


  panelDaLi: {
    type: Boolean,
    default: false,
  },
  radionicaDaLi: {
    type: Boolean,
    default: false,
  },
  emailPriv: {
    type: String,
    required: [true, 'Morate uneti pravi email logistika'],
  },
  brojTelefona: {
    type: String,
    required: true,
  },
}

const prijavaShema = new mongoose.Schema(
  {
    prijavaId:{
      type: String,
      required: false,
    },

    imePrezime: {
      type: String,
      required: [true, 'Morate uneti ime i prezime'],
    },
    emailPriv: {
      type: String,
      required: [true, 'Morate uneti pravi email'],
    },
    brojTelefona: {
      type: String,
      required: true,
    },
    fakultet: {
      type: String,
      required: true,
    },
    godinaStudija: {
      type: String,
      required: true,
    },
    newsletter: {
      type: Boolean,
      default: false,
    },
    daLiJeRanijeUcestvovao: {
      type: Boolean,
      default: false,
    },
    generalnaMotivacija: {
      type: String,
      required: true,
    },
    panelDaLi: {
      type: Boolean,
      default: false,
    },
    radionicaDaLi: {
      type: Boolean,
      default: false,
    },
    pitanjaPanelistima: {
      type: String,
      required: true,
    },
    prvaRadionica: {
      type: String,
      required: [true, 'Odaberite Radionicu'],
    },
    prvaMotivacija: {
      type: String,
      required: [true, 'Niste napisali motivaciju za primarnu radionicu'],
    },
    drugaRadionica: {
      type: String,
      required: [true, 'Odaberite Radionicu'],
    },
    drugaMotivacija: {
      type: String,
      required: [true, 'Niste napisali motivaciju za alternativnu radionicu'],
    },
    statusHR: {
      type: String,
      enum: ['neocenjen', 'ocenjen', 'finalno'],
      default: 'neocenjen',
    },
    statusLogistika: {
      type: String,
      enum: ['nesmesten', 'smesten'],
      default: 'nesmesten',
    },
    oznacen: {
      type: Boolean,
      default: false,
    },
    ocena: {
      type: Number,
      default: 0,
      min: 0,
      max: 25,
    },
    infoZaLogistiku: {
      type: infoZaLogistiku,
      default: {},
    },
    izmeniliLog: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'admins',
      },
    ],
    izmeniliHr: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'admins',
      },
    ],
    napomena: {
      type: String,
      default: '',
    },
  },
  {
    minimize: false,
  }
)

module.exports = mongoose.model('applications', prijavaShema)
