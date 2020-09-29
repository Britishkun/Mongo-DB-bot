module.exports = (client) => {
    console.log('Active!');
    client.user.setStatus("idle")
};