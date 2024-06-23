import React from "react";

interface Props {
    color?: string;
    size: string
}

export default function LogoIcon({color = "#f2f2f2", size}: Readonly<Props>) {
    return (
<svg width={size} height={size} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.41092 18.9781C4.40451 18.9788 4.39803 18.9788 4.39162 18.9781C4.28637 18.9577 4.17963 18.9461 4.07248 18.9432C4.04873 18.9432 4.02498 18.9432 3.99826 18.9432C3.43628 18.9432 2.89732 19.1664 2.49994 19.5638C2.10256 19.9612 1.87932 20.5002 1.87932 21.0621V21.0673C1.88158 21.4823 2.00567 21.8874 2.23618 22.2324C2.46668 22.5775 2.79345 22.8472 3.17592 23.0082C2.34422 22.7478 1.61497 22.2335 1.09062 21.5374C0.56626 20.8413 0.273142 19.9985 0.252441 19.1273C0.252441 19.0961 0.252441 19.0642 0.252441 19.0315C0.252441 18.4804 0.471386 17.9518 0.86111 17.5621C1.25083 17.1723 1.77941 16.9534 2.33057 16.9534C2.34689 16.9534 2.36471 16.9534 2.38104 16.9534C2.91466 16.9656 3.42313 17.1827 3.80104 17.5596C4.17895 17.9366 4.39733 18.4445 4.41092 18.9781Z" fill="#10C0AB"/>
<path d="M8.5492 19.584C8.41512 20.5844 7.92255 21.5022 7.16294 22.1669C6.40334 22.8317 5.42832 23.1982 4.41893 23.1984C4.27495 23.1984 4.13319 23.191 3.99291 23.1776C3.71751 23.1487 3.44558 23.093 3.18096 23.0114C2.79813 22.8496 2.47135 22.5787 2.24132 22.2326C2.01129 21.8864 1.88819 21.4802 1.88733 21.0646V21.0594C1.88733 20.4974 2.11057 19.9585 2.50795 19.5611C2.90533 19.1637 3.44429 18.9405 4.00627 18.9405C4.03002 18.9405 4.05377 18.9405 4.08049 18.9405C4.18766 18.9431 4.29442 18.9548 4.39963 18.9754C4.40557 18.9754 4.41225 18.9754 4.41893 18.9754C4.43598 18.9742 4.45309 18.9742 4.47014 18.9754C4.47014 18.9887 4.47014 19.0147 4.47014 19.0281C4.46399 19.5353 4.64357 20.0272 4.97502 20.4112C5.30647 20.7951 5.76691 21.0446 6.26957 21.1126C6.77223 21.1806 7.2824 21.0624 7.70395 20.7803C8.12549 20.4982 8.42929 20.0716 8.55811 19.581L8.5492 19.584Z" fill="#10C0AB"/>
<path d="M8.58567 19.0309C8.5856 19.2158 8.57346 19.4005 8.5493 19.5838C8.42049 20.0744 8.11668 20.501 7.69514 20.7831C7.27359 21.0652 6.76342 21.1834 6.26076 21.1154C5.7581 21.0474 5.29766 20.798 4.96621 20.414C4.63476 20.03 4.45519 19.5381 4.46133 19.0309C4.46133 19.0175 4.46133 19.0049 4.46133 18.9908V18.9782C5.00385 18.9783 5.52493 18.7663 5.91323 18.3875C6.30154 18.0086 6.52628 17.4929 6.53946 16.9505C6.54057 16.9327 6.54057 16.9149 6.53946 16.8971C6.53965 16.4598 6.40188 16.0336 6.14576 15.6791C5.88964 15.3246 5.52823 15.06 5.11297 14.9229C5.99044 15.0714 6.79736 15.4968 7.41567 16.1369C8.03398 16.7769 8.43123 17.5981 8.5493 18.4802C8.5734 18.6628 8.58555 18.8467 8.58567 19.0309Z" fill="#10C0AB"/>
<path d="M6.54234 16.8977C6.54345 16.9155 6.54345 16.9333 6.54234 16.9511C6.52916 17.4935 6.30442 18.0092 5.91611 18.3881C5.52781 18.7669 5.00673 18.9789 4.46421 18.9788H4.413C4.39979 18.4448 4.18147 17.9364 3.80336 17.5591C3.42525 17.1819 2.91638 16.9647 2.38238 16.9526C2.36605 16.9526 2.34824 16.9526 2.33191 16.9526C1.78076 16.9526 1.25218 17.1716 0.862453 17.5613C0.472729 17.951 0.253784 18.4796 0.253784 19.0307C0.253994 18.4245 0.386439 17.8256 0.641884 17.2759C0.897329 16.7261 1.26962 16.2386 1.73281 15.8475C2.19599 15.4564 2.73892 15.1711 3.32372 15.0113C3.90853 14.8516 4.52113 14.8214 5.11882 14.9227C5.53364 15.0604 5.8945 15.3254 6.15006 15.6799C6.40563 16.0345 6.54289 16.4606 6.54234 16.8977Z" fill="#10C0AB"/>
<path d="M17.6454 14.3424C16.6539 14.8345 15.7491 15.3488 15.1658 15.8268C13.1566 15.9647 11.1578 16.2265 9.18079 16.6105C9.0043 16.6393 8.82355 16.5982 8.67684 16.496C8.53012 16.3938 8.42897 16.2384 8.39481 16.0629C8.36066 15.8874 8.39617 15.7055 8.49384 15.5557C8.59152 15.4059 8.74366 15.3 8.91805 15.2605C11.795 14.7013 14.7152 14.3941 17.6454 14.3424Z" fill="#10C0AB"/>
<path d="M29.5391 16.2541C29.5067 16.4074 29.4227 16.545 29.3012 16.6438C29.1796 16.7427 29.0279 16.7969 28.8712 16.7974C28.8228 16.7977 28.7745 16.7927 28.7272 16.7826C25.381 16.0703 21.9693 15.7106 18.5481 15.7094H18.5288C17.4081 15.7094 16.2876 15.748 15.1674 15.8252C15.7508 15.3494 16.6518 14.8351 17.6471 14.3408C17.941 14.3358 18.2349 14.3331 18.5288 14.3326H18.5488C22.0661 14.3335 25.5736 14.7034 29.0137 15.4363C29.1019 15.4553 29.1856 15.4917 29.2598 15.5431C29.334 15.5946 29.3973 15.6602 29.4461 15.7362C29.4949 15.8121 29.5283 15.897 29.5442 15.9859C29.5602 16.0748 29.5585 16.1659 29.5391 16.2541Z" fill="#10C0AB"/>
<path d="M27.9062 19.5294H10.0544C9.87212 19.5294 9.69731 19.457 9.56842 19.3281C9.43953 19.1992 9.36713 19.0244 9.36713 18.8422C9.36713 18.6599 9.43953 18.4851 9.56842 18.3562C9.69731 18.2273 9.87212 18.1549 10.0544 18.1549H27.9062C28.0885 18.1549 28.2633 18.2273 28.3922 18.3562C28.5211 18.4851 28.5935 18.6599 28.5935 18.8422C28.5935 19.0244 28.5211 19.1992 28.3922 19.3281C28.2633 19.457 28.0885 19.5294 27.9062 19.5294Z" fill="#10C0AB"/>
<path d="M14.3821 10.8877C12.9156 11.3553 11.8283 12.1829 11.6049 12.9518C10.1783 13.385 8.79546 13.951 7.47459 14.6425C7.31318 14.7273 7.12468 14.7446 6.95055 14.6904C6.77643 14.6363 6.63095 14.5152 6.54611 14.3538C6.46127 14.1924 6.44403 14.0039 6.49817 13.8297C6.55232 13.6556 6.67341 13.5101 6.83482 13.4253C9.20182 12.1886 11.7488 11.3323 14.3821 10.8877Z" fill="#10C0AB"/>
<path d="M31.1496 14.5757C31.1064 14.655 31.048 14.7251 30.9777 14.7818C30.9073 14.8384 30.8265 14.8807 30.7398 14.906C30.6531 14.9313 30.5622 14.9392 30.4724 14.9293C30.3827 14.9193 30.2957 14.8917 30.2167 14.8481C28.4988 13.9088 26.6719 13.1844 24.7772 12.6913C25.1553 12.6451 25.5294 12.5706 25.8964 12.4686C26.338 12.3485 26.7676 12.1878 27.1796 11.9884C28.454 12.4393 29.6898 12.9925 30.875 13.6428C31.035 13.7301 31.1539 13.8775 31.2054 14.0524C31.2569 14.2273 31.2368 14.4155 31.1496 14.5757Z" fill="#10C0AB"/>
<path d="M27.1796 11.9906C26.7676 12.1892 26.338 12.3492 25.8964 12.4685C25.5294 12.5706 25.1553 12.645 24.7772 12.6912C23.8976 12.4606 23.0055 12.2804 22.1053 12.1516C20.986 11.9911 19.8569 11.9095 18.7261 11.9074C18.5317 11.9074 18.3355 11.9092 18.1376 11.9126C15.9231 11.9576 13.7254 12.3072 11.6063 12.9517C11.829 12.1828 12.917 11.3553 14.3836 10.8877C15.2994 10.7325 16.2231 10.6279 17.1505 10.5745C17.4661 10.5552 17.7863 10.5423 18.1109 10.5359C21.197 10.4695 24.2698 10.9623 27.1804 11.9906H27.1796Z" fill="#10C0AB"/>
<path d="M17.6454 23.5274C16.6539 23.0354 15.7491 22.5218 15.1658 22.0431C13.1566 21.9048 11.1578 21.643 9.18079 21.2593C9.0043 21.2306 8.82355 21.2717 8.67684 21.3739C8.53012 21.4761 8.42897 21.6314 8.39481 21.8069C8.36066 21.9825 8.39617 22.1644 8.49384 22.3142C8.59152 22.464 8.74366 22.5698 8.91805 22.6094C11.795 23.1685 14.7151 23.4757 17.6454 23.5274Z" fill="#10C0AB"/>
<path d="M29.5391 21.613C29.5067 21.4597 29.4227 21.3222 29.3012 21.2233C29.1796 21.1244 29.0279 21.0702 28.8712 21.0697C28.8228 21.0696 28.7746 21.0743 28.7272 21.0838C25.3811 21.7969 21.9693 22.1566 18.5481 22.157H18.5288C17.4081 22.157 16.2876 22.1187 15.1674 22.042C15.7508 22.5177 16.6518 23.0313 17.6471 23.5264C17.941 23.5323 18.2349 23.535 18.5288 23.5345H18.5488C22.0661 23.5339 25.5736 23.1642 29.0137 22.4316C29.102 22.4126 29.1857 22.3762 29.26 22.3247C29.3342 22.2732 29.3976 22.2075 29.4464 22.1315C29.4952 22.0554 29.5286 21.9704 29.5445 21.8815C29.5604 21.7925 29.5586 21.7013 29.5391 21.613Z" fill="#10C0AB"/>
<path d="M14.3822 26.979C12.9156 26.5114 11.8283 25.6839 11.6049 24.915C10.1783 24.4818 8.7955 23.9157 7.47462 23.2243C7.31358 23.1421 7.12665 23.1268 6.95435 23.1815C6.78205 23.2362 6.63824 23.3566 6.55409 23.5166C6.46994 23.6766 6.45223 23.8633 6.50478 24.0363C6.55733 24.2093 6.67592 24.3546 6.83486 24.4407C9.2018 25.6777 11.7488 26.5343 14.3822 26.979Z" fill="#10C0AB"/>
<path d="M31.1496 23.2913C31.0905 23.183 31.0032 23.0925 30.897 23.0296C30.7908 22.9666 30.6696 22.9335 30.5462 22.9336C30.4309 22.9335 30.3174 22.9629 30.2167 23.0189C28.4989 23.959 26.672 24.6841 24.7772 25.178C25.1552 25.2224 25.5293 25.2953 25.8964 25.3962C26.338 25.5163 26.7676 25.677 27.1796 25.8764C28.4538 25.4259 29.6896 24.8734 30.875 24.2243C31.035 24.1369 31.1539 23.9896 31.2054 23.8146C31.2569 23.6397 31.2368 23.4515 31.1496 23.2913Z" fill="#10C0AB"/>
<path d="M27.1796 25.8761C26.7676 25.6767 26.3381 25.516 25.8964 25.3959C25.5294 25.295 25.1552 25.2221 24.7772 25.1777C23.8975 25.4077 23.0054 25.5876 22.1053 25.7165C20.986 25.8769 19.8569 25.9588 18.7261 25.9615C18.5317 25.9615 18.3355 25.9597 18.1376 25.9563C15.9232 25.9106 13.7256 25.561 11.6063 24.9172C11.829 25.6861 12.917 26.5136 14.3836 26.9812C15.2994 27.1364 16.2231 27.241 17.1505 27.2944C17.4661 27.3137 17.7863 27.3266 18.1109 27.333C19.4537 27.3614 20.7967 27.2845 22.1276 27.1029C23.8491 26.8677 25.542 26.4566 27.1796 25.8761Z" fill="#10C0AB"/>
<path d="M35.7052 21.0462C35.3605 21.0463 35.0213 20.9606 34.718 20.797C34.4147 20.6334 34.1569 20.3969 33.9677 20.1088L32.4239 21.3498V19.6168H29.4648C29.5863 20.3839 29.9196 21.1019 30.4273 21.6897C30.9349 22.2776 31.5966 22.712 32.3379 22.944C32.6025 23.0257 32.8744 23.0813 33.1498 23.1102C33.2901 23.1236 33.4326 23.131 33.5758 23.131C34.5859 23.1324 35.5621 22.7669 36.323 22.1027C37.0839 21.4384 37.5777 20.5205 37.7128 19.5195C37.5911 19.9585 37.3288 20.3455 36.9662 20.6212C36.6036 20.8969 36.1607 21.0462 35.7052 21.0462Z" fill="#10C0AB"/>
<path d="M37.7492 18.9651C37.7491 19.1498 37.7369 19.3342 37.7128 19.5173C37.608 19.9041 37.3936 20.2522 37.0955 20.52C36.7973 20.7877 36.4282 20.9635 36.0324 21.0262C35.6367 21.089 35.2312 21.036 34.8649 20.8736C34.4986 20.7112 34.187 20.4464 33.9677 20.1111L35.5115 18.8686L34.9615 18.4233C35.1876 18.2343 35.3707 17.9992 35.4987 17.7338C35.6267 17.4683 35.6966 17.1786 35.7037 16.884C35.7037 16.8655 35.7037 16.8477 35.7037 16.8298C35.7039 16.3926 35.5663 15.9665 35.3103 15.612C35.0543 15.2576 34.6931 14.9929 34.2779 14.8556C35.1547 15.0046 35.9607 15.4301 36.5785 16.0698C37.1962 16.7096 37.5931 17.5301 37.7113 18.4114C37.736 18.595 37.7486 18.7799 37.7492 18.9651Z" fill="#10C0AB"/>
<path d="M34.2794 14.8564C33.2158 14.6758 32.1236 14.9147 31.2324 15.5227C30.3412 16.1307 29.7204 17.0606 29.5005 18.1168H32.424V16.383L33.9677 17.6247L34.9615 18.4241C35.1876 18.235 35.3707 18 35.4987 17.7345C35.6267 17.4691 35.6966 17.1794 35.7037 16.8848C35.7037 16.8662 35.7037 16.8484 35.7037 16.8306C35.704 16.3936 35.5666 15.9675 35.3109 15.6131C35.0552 15.2587 34.6943 14.9939 34.2794 14.8564Z" fill="#10C0AB"/>
</svg>

    );
}
