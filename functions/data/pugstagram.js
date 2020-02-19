const pugstagram = () => {
  const data = {
    "user": {
      "nickname": "gndx",
      "name": "Oscar Barajas"
    },
    "posts": [
      {
        "username": "Elmo.pug",
        "location": "Bogotá, Colombia",
        "avatar": "https://arepa.s3.amazonaws.com/67929712_928069460889297_8283659778337538048_n.jpg",
        "photo": "https://arepa.s3.amazonaws.com/elmo.jpg",
        "like": false,
        "bookmark": false,
        "postComment": "Hola, Disfrutando de mi piscina",
        "comments": [
          {
            "id": 123234535,
            "text": "Hola Elmo",
            "username": "Crispeta"
          },
          {
            "id": 1232322312,
            "text": "¡Hola!",
            "username": "Dollarsin"
          }
        ]
      },
      {
        "username": "Elmo.pug",
        "location": "Bogotá, Colombia",
        "avatar": "https://arepa.s3.amazonaws.com/67929712_928069460889297_8283659778337538048_n.jpg",
        "photo": "https://arepa.s3.amazonaws.com/elmo.jpg",
        "like": false,
        "bookmark": false,
        "postComment": "Hola 2",
        "comments": [
          {
            "id": 123234535,
            "text": "Hola Elmo",
            "username": "gndx"
          }
        ]
      }
    ]
  }
  return data;
};

module.exports = pugstagram;