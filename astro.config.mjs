import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightDocSearch from '@astrojs/starlight-docsearch';
import starlightBlog from 'starlight-blog'

// https://astro.build/config
export default defineConfig({

    // Enable sitemap generation
    site: 'https://docs.irichard.me',

    integrations: [
        starlight({
            title: 'My Tech Notes',
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
                                // title: 'CEO',
                                // picture: '/avatar.png',
                                url: 'https://docs.irichard.me',
                            },
                        },
                    }
                ),
            ],
            social: {
                github: 'https://github.com/i-Richard-me/docs',
            },
            sidebar: [
                {label: 'Welcome', link: '/guides/intro/'},
                {
                    label: 'Self Hosted',
                    items: [
                        {
                            label:
                                'VMs',
                            items:
                                [{label: 'Proxmox PVE', link: '/selfhosted/vm/proxmox-pve'},
                                    {label: 'CUDA 虚拟机环境', link: '/selfhosted/vm/cuda-vm'},
                                    {label: '黑群晖', link: '/selfhosted/vm/synology-dsm'},
                                ]
                        },
                        {
                            label: 'Linux',
                            items: [
                                {label: '国内镜像源', link: '/selfhosted/linux/mirror-source'},
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
                        // {
                        //     label:
                        //         'Hardware',
                        //     items:
                        //         [{label: 'IPMI 风扇转速', link: '/selfhosted/hardware/ipmi-fan'}]
                        // },
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
