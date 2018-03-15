module.exports = {
  serve: (req, res) => {
    const fs = require('fs')

    const app = __dirname + '/../../assets/index.html'
    fs.createReadStream(app).pipe(res)
  },

  message: function(req, res) {
    res.send({
      success: true,
      message: "This message is being sent from the server."
    });
  },
}
