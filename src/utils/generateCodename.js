exports.generateCodename = () => {
    const codenames = ['The Nightingale', 'The Kraken', 'Ghost Shadow', 'Silver Falcon'];
    return codenames[Math.floor(Math.random() * codenames.length)];
};