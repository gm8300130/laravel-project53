var path = require('path');
var webpack = require('webpack');


module.exports = {
	//傳入一個檔案或者路徑字串 (別名：路徑)
	entry: {
		//共用
		'all': './resources/js/page',
		//前台
		'home': './resources/js/home',
		//後台
		'admin': './resources/js/admin',
		//個人資料
		'profile': './resources/js/profile',
		//相依套件
		'vendor': './resources/js/vendor',
		//測試用
		'test': './resources/js/test',
	},
	//輸出位置, laravel 預設讀取public之下目錄
	output: {
        path: path.join(__dirname, 'public/js'),
        filename: '[name].js',
    },
    module: {
    	//載入, 解析, 轉譯
    	loaders: [
    		{
	            //test 值為正規化格式, 要轉譯的路徑, 檔名
	            test: /\.js?$/,
	            //exclude 排除文件
	            exclude: /(node_modules|bower_components)/,
	            //loader+options => babel?presets[]=ec2015
	            loader: 'babel-loader',
	            options: {
                	// 轉成es2015格式，支援舊的 Browser
                    presets: [ 'es2015' ]
                },
        	},
    		{
    			test:/\.css$/,
    			// style-loader!css-loader的縮寫 !是串連的意思
    			loader: 'style!css'
    		},
    		{
    			test: /\.(png|jpg)$/,
    			//可以寫成url?limit=1024
    			loader: 'url-loader',
    			query: {limit: 1024}
    		}
    	]
    },
    resolve: {
    	alias: {
    		'autosize': path.join(__dirname, config.bowerDir + '/autosize/dist/autosize.min.js'),
    		'bootstrap': path.join(__dirname, config.bowerDir + '/jasny-bootstrap/dist/js/jasny-bootstrap.min.js')
    	}
    },
    plugins: [
    	new webpack.ProvidePlugin({
    		'autosize': 'autosize',
    		'bootstrap': 'bootstrap',
    		'jQuery': 'jquery',
            '$': 'jquery',
            'window.jQuery': 'jquery',
            'Layzr': 'layzr'
    	})
    ]

};