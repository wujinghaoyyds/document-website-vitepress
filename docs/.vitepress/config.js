module.exports = {
    title: '前端文档', // 网站标题
    description: ' ', // 网站的描述
    base: '/document-website-vitepress/', //  部署时的路径 默认 /  可以使用二级地址 /document-website-vitepress/
    // dest: './dist',// 打包目录
    head: [['link', {rel: 'icon', href: './favicon.ico'}]],// 添加网站图标
    // 主题配置
    themeConfig: {
        // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
        // lastUpdated: 'Last Updated', // string | boolean
        // 启动页面丝滑滚动
        // smoothScroll: true,
        // 导航栏配置
        nav: [
            // {
            //     text: 'HTML/CSS', items: [
            //         {text: 'HTML', link: '/htmldocs/'},
            //         {text: 'CSS', link: '/cssdocs/'},
            //     ]
            // },
            {text: 'HTML', link: '/htmldocs/'},
            {text: 'CSS', link: '/cssdocs/'},
            {text: 'JavaScript', link: '/jsdocs/'},
            {text: '面试题', link: '/interview/'},
        ],
        //  左侧导航栏配置
        sidebar: {
            'catalogue': [],
            'htmldocs': [
                {
                    text: 'HTML', children: [
                        {text: 'HTML简介', link: '/htmldocs/'},
                        {text: '全局属性', link: '/htmldocs/htmlAttribute'},
                        {text: '语义结构', link: '/htmldocs/htmlSemantic'},
                        {text: '文本标签', link: '/htmldocs/htmlText'},
                        {text: '表单标签', link: '/htmldocs/htmlForm'},
                        {text: '链接/图像', link: '/htmldocs/htmlLinkAndImage'},
                        {text: '列表/表格', link: '/htmldocs/htmlListAndTable'},
                        {text: '多媒体标签', link: '/htmldocs/htmlMultimedia'},
                        {text: '参考手册', link: '/htmldocs/htmlHandbook'},
                    ]
                }],
            'cssdocs': [
                {
                    text: 'CSS', children: [
                        {text: 'CSS 简介', link: '/cssdocs/'},
                        {text: '选择器', link: '/cssdocs/cssSelector'},
                        {text: '盒子', link: '/cssdocs/cssBox'},
                        {text: '布局', link: '/cssdocs/cssDisplay'},
                        {text: '边框', link: '/cssdocs/cssBorder'},
                        {text: '轮廓', link: '/cssdocs/cssOutline'},
                        {text: '文本', link: '/cssdocs/cssText'},
                        {text: '颜色', link: '/cssdocs/cssColor'},
                        {text: '背景', link: '/cssdocs/cssBackground'},
                        {text: '字体', link: '/cssdocs/cssFont'},
                        {text: '列表', link: '/cssdocs/cssList'},
                        {text: '表格', link: '/cssdocs/cssTable'},
                        {text: '单位', link: '/cssdocs/cssUnits'},
                        {text: '动画', link: '/cssdocs/cssAnimation'},
                        {text: '函数', link: '/cssdocs/cssFunction'},
                        {text: '其他', link: '/cssdocs/cssOther'},
                        {text: '进阶', link: '/cssdocs/cssAdvance'},
                    ]
                }],
        },
        // algolia: {
        //     apiKey: 'your_api_key',
        //     indexName: 'index_name'
        // },
        // carbonAds: {
        //     carbon: 'your-carbon-key',
        //     custom: 'your-carbon-custom',
        //     placement: 'your-carbon-placement'
        // }
    }
}