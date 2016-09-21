exports.myHandler = function(event, context) {
  return 'Hello';
};

var BUCKET_NAME = '';

var AWS = require('aws-sdk');
var s3 = new AWS.S3();

/**
 * 画像をアップロードし、S3に保存する
 */
function upload() {
  // upload, putObject
  var params = {Bucket: 'bucket', Key: 'key', Body: stream};
  s3.upload(params, function(err, data) {
    console.log(err, data);
  });

}

/**
 * S3に保存してある画像を取得する
 *
 * getObject
 */
function get(s3, bucket_name, key) {
  s3.getObject({
    Bucket: bucket_name,
    Key: key
  }, function() {
    if (err) {
      // an error occurred
      console.log(err, err.stack);
    } else {
      // successful response
      console.log(data);
    }
  });
}


/**
 * 定期的に古いリソースをS3から削除する
 *
 * deleteObject
 * deleteObjects
 */
