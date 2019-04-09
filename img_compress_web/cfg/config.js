'use strict';

const ENV_DEV = 1;
const ENV_TEST = 2;
const ENV_PROD = 3;

module.exports = {
    ENV_DEV,
    ENV_TEST,
    ENV_PROD,

    img_db_conf_dev: {
        uri: "mysql://tars:tars2015@172.16.116.50:3307/sunlive"
    },

    sfs_dev: {
        token_url: 'http://test-sfs-api.shangdejigou.cn/api/auth/token',
        compress_url: 'http://test-sfs-api.shangdejigou.cn/api/img/compress',
        ak: 'OdHNJQQJh9WJJUYFbpOwHY5PkI7e2t1u',
        sk: 'YTViynDYtqCzqtPpDaSsiHuha5qa68mCaPLz',
        tm: 3600,
        compress_qua: 30
    }
};
