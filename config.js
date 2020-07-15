module.exports = {
	dist: __dirname + '/../public/',
	release: __dirname + '/../release/',
	assets: __dirname + '/../public/assets/',
	directories: [
		[
			'/globalnavi/',
			'/dokidoki/',
			'/hellowoods/',
			'/itadaki/',
			'/mobipark_m/',
			'/sumika/',
			'/top/'
		],[
			'/hellowoods/program/',
			'/hellowoods/zip-line/',
			'/mobipark_m/attractions/'
		]
	],
	commonParts: {
		directory: '/globalnavi/',
		files: [
			'header_utf.html',
			'trm_header.html',
			'footer_utf.html',
			'trm_footer.html',
			'test.html'
		]
	},
	tag: {
		header: {
			start: '<!-- START GLOBAL HEADER -->',
			end: '<!-- END GLOBAL HEADER -->'
		},
		footer: {
			start: '<!-- START GLOBAL FOOTER -->',
			end: '<!-- END GLOBAL FOOTER -->'
		},
		closed: '</html>'
	},
	scp: {

	    host: process.env.MOTEGI_SCP_HOST,
	    username: process.env.MOTEGI_SCP_USERNAME,
	    password: process.env.MOTEGI_SCP_PASSWORD,
	    top: {
	        src: '',
	        dist:''
	    },
            sumika: {
                src: '',
                dist:''
            },
            itadaki: {
                src: '',
                dist:''
            },
            dokidoki: {
                src: '',
                dist:''
            },
            hellowoods: {
                src: '',
                dist:''
            },
            mobipark_m: {
                src: '',
                dist:''
            },
            hoteltwinring: {
                src: '',
                dist:''
            }

	    //path: process.env.MOTEGI_SCP_DIST_PATH
	}
}