module.exports = {
    title: '吴京豪的文档网站', // 网站标题
    description: '总结归纳学习中的知识', // 网站的描述
    base: '/document-website-vitepress/', //  部署时的路径 默认 /  可以使用二级地址 /document-website-vitepress/
    // dest: './dist',// 打包目录
    head: [['link', {rel: 'icon', href: '/favicon.ico'}]],// 添加网站图标
    // 主题配置
    themeConfig: {
        // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
        // lastUpdated: 'Last Updated', // string | boolean
        // 启动页面丝滑滚动
        // smoothScroll: true,
        // 导航栏配置
        nav: [
            {text: '首页', link: '/'},
            {text: '指南', link: '/guide/'},
            {
                text: 'HTML/CSS', items: [
                    {text: 'HTML5', link: '/htmldocs/'},
                    {text: 'CSS3', link: '/cssdocs/'},
                    {text: 'JavaScript/待定', link: '/jsdocs/'},
                ]
            },

            {text: '面试题/待定', link: ''},
            {text: '关于作者/待定', link: ''},

        ],
        //  左侧导航栏配置
        sidebar: {
            'guide': [],
            'htmldocs': [
                {
                    text: 'HTML5', children: [
                        {text: '概况', link: '/htmldocs/'},
                        {text: '入门', link: '/htmldocs/htmlone'},
                    ]
                }],
            'cssdocs': [
                {
                    text: 'css3', children: [
                        {text: 'css文档', link: '/cssdocs/'},
                        {text: 'css文档1', link: '/cssdocs/cssone'},
                        {text: 'css文档2', link: '/cssdocs/csstwo'},
                        {text: 'css文档3', link: '/cssdocs/cssthree'},

                    ]
                }],
        },
        algolia: {
            apiKey: 'your_api_key',
            indexName: 'index_name'
        },
        carbonAds: {
            carbon: 'your-carbon-key',
            custom: 'your-carbon-custom',
            placement: 'your-carbon-placement'
        }
    }
}