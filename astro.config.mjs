import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightDocSearch from '@astrojs/starlight-docsearch';
import starlightBlog from 'starlight-blog';

// https://astro.build/config
export default defineConfig({

    // Enable sitemap generation
    site: 'https://docs.irichard.me',

    integrations: [
        starlight({
            title: 'Richard\'s Blog',
            customCss: [
                // 你的自定义 CSS 文件的相对路径
                './src/styles/custom.css',
            ],
            plugins: [
                starlightDocSearch({
                        appId: 'PBF4GAL3QH',
                        apiKey: 'cb8d1d8562fd6d9e77d1556afb91145e',
                        indexName: 'irichard',
                    },
                ),
                starlightBlog(
                    {
                        authors: {
                            richard: {
                                name: 'Richard Wang',
                                title: '博主',
                                picture: '/avatar_128x128.png',
                                url: 'https://docs.irichard.me',
                            },
                        },
                    }
                ),
            ],
            head: [
                {
                    tag: 'script',
                    attrs: {
                        src: 'https://plausible.homelab.wang/js/script.js',
                        'data-domain': 'docs.irichard.me',
                        defer: true,
                    },
                },
            ],
            social: {
                github: 'https://github.com/i-Richard-me/docs',
            },
            sidebar: [
                {label: 'Welcome', link: '/guides/intro/'},
                {
                    label: 'AI与大模型',
                    items: [
                        {
                            label: '简介', link: '/llm/llm-intro',
                            badge: {text: 'Intro', variant: 'success'},
                            attrs: {style: 'font-size: var(--sl-text-base); font-weight: 600; color: var(--sl-color-white)'},
                        },
                        {
                            label:
                                '优化技巧',
                            items:
                                [
                                    {label: '示例选择器', link: '/llm/optimizing/example-selector'},
                                    {label: '复杂问题分解', link: '/llm/optimizing/rag-with-decomposition'},
                                    {label: '多向量检索之假设提问', link: '/llm/optimizing/multivector-retriever-hypothetical-queries'}
                                ]
                        },
                        {
                            label:
                                '模型应用',
                            items:
                                [
                                    {label: '提升情感分类任务准确性', link: '/llm/application/sentiment_classification'},
                                    {label: '文本分类任务中的模型效果对比', link: '/llm/application/llm_compare'},
                                    {label: '利用大模型进行实体及属性抽取', link: '/llm/application/performance-eval-analysis'},
                                    {label: '简单实现文档检索和生成', link: '/llm/application/rag_basic'},
                                    {label: '基于SQL数据库的简单问答', link: '/llm/application/sqlbot_basic'},
                                    {label: '简单构建岗位与技能知识图谱', link: '/llm/application/knowledge-graph'},
                                ]
                        },
                        {
                            label:
                                '模型部署',
                            items:
                                [
                                    {label: '大模型部署容器环境', link: '/llm/llm-docker-env'},
                                    {label: '开源大模型兼容Openai接口', link: '/llm/openai-api-for-open-llm'},
                                ]
                        },
                    ]
                },
                {
                    label: 'Self Hosted',
                    items: [
                        {
                            label:
                                'Services',
                            items:
                                [
                                    {label: 'Plausible 网站分析工具', link: '/selfhosted/services/plausible'},
                                ]
                        },
                        {
                            label:
                                'VMs',
                            items:
                                [
                                    {label: 'Proxmox PVE', link: '/selfhosted/vm/proxmox-pve'},
                                    {label: 'CUDA 虚拟机部署', link: '/selfhosted/vm/cuda-vm'},
                                    {label: '黑群晖安装指南', link: '/selfhosted/vm/synology-dsm'},
                                ]
                        },
                        {
                            label: 'Linux',
                            items: [
                                {label: '替换国内镜像源', link: '/selfhosted/linux/mirror-source'},
                                {label: '必备软件包', link: '/selfhosted/linux/package-install'},
                                {label: 'NTP时间同步', link: '/selfhosted/linux/ntp'},
                                {label: 'Docker安装部署', link: '/selfhosted/linux/docker-install'},
                            ],
                        },
                        {
                            label:
                                'Network',
                            items:
                                [{label: 'Nginx Proxy Manager', link: '/selfhosted/network/nginx-proxy-manager'},
                                    {label: 'frp内网穿透', link: '/selfhosted/network/frp'},
                                ]
                        },
                    ],
                },
                {
                    label:
                        '实用工具',
                    items:
                        [
                            {label: '实用链接', link: '/utility/links'},
                        ]
                },
                // {
                //     label: 'Reference',
                //     autogenerate: {directory: 'reference'},
                // },
            ],
        }),
    ],
});