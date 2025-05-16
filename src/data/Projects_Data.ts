// Define project category types
export type ProjectCategory = 
  | '전체'
  | '산업시설/기타'
  | '주상복합/공동주택'
  | '일반상업분야/업무시설'
  | '종교시설'
  | '인테리어';

// Define project interface
export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  imageUrl?: string;
  description?: string;
  slug: string;
}

// Category to slug mapping
export const categoryToSlug: Record<ProjectCategory, string> = {
  '전체': 'all',
  '산업시설/기타': 'industrial-facilities',
  '주상복합/공동주택': 'residential-complex',
  '일반상업분야/업무시설': 'commercial-business',
  '종교시설': 'religious-facilities',
  '인테리어': 'interior'
};

export const projects_data: Project[] = [
  {
    id: '86',
    title: '봉평면 재산리 금당마을 "류경희 아트갤러리하우스"',
    category: '산업시설/기타',
    imageUrl: 'http://www.eulz.co.kr/data/file/gallery/thumb-a3f2447881ba64169afeb3f67ebf25a4_RDxwjzfl_aff4fea505fb8ec1c43b4f682a946a552a0707ac_790x790.jpg',
    description: '면적: 지하1층,지상2층',
    slug: 'gallery-86'
  },
  {
    id: '85',
    title: '2023 양주시 덕계동 678-3외 3필지 근생 및 도시형생활주택',
    category: '일반상업분야/업무시설',
    imageUrl: 'http://www.eulz.co.kr/data/file/gallery/thumb-4c4b08fe55623176187a5ab3bc3edeaa_YsUQ4J0B_9f44b9ddb0f713619558ccf7d3eab308d63deb4e_790x790.png',
    description: '면적: 4633.95㎡ 지하1층 지상4층',
    slug: 'gallery-85'
  },
  {
    id: '84',
    title: '2023 퇴촌 도수리 풀빌라 및 글램핑장',
    category: '산업시설/기타',
    imageUrl: 'http://www.eulz.co.kr/data/file/gallery/thumb-4c4b08fe55623176187a5ab3bc3edeaa_DBwUe29v_09e7920d8ddb2b0f0a7df2b3780b3cc49d1045bb_790x790.png',
    description: '면적: 풀빌라 1600㎡(480평 3층 4개동) 글램핑 810㎡(245.8평17개소) 본부동 805㎡(243.45평)',
    slug: 'gallery-84'
  },
  {
    id: '83',
    title: '2023 광희동 단독주택 및 근린생활시설',
    category: '산업시설/기타',
    imageUrl: 'http://www.eulz.co.kr/data/file/gallery/thumb-4c4b08fe55623176187a5ab3bc3edeaa_2UWnjrgy_4e5cf01d5670ffb9284540a3976e3924b736b384_790x790.jpg',
    description: '면적: 200㎡ 지하1층,지상2층',
    slug: 'gallery-83'
  },
  {
    id: '81',
    title: '2022 의정부역 생활형숙박시설',
    category: '일반상업분야/업무시설',
    imageUrl: 'http://www.eulz.co.kr/data/file/gallery/thumb-aa4a7c8b0de90484595e1338394cf3c3_gLGPx4FE_3d2057282b14af1bad1935e6dc79ba2a9a866029_790x790.png',
    description: '면적: 14,314.4m2 지하2층, 지상26층 266실',
    slug: 'gallery-81'
  },
  {
    id: '74',
    title: '2022 여주시 물류창고신축공사',
    category: '산업시설/기타',
    imageUrl: 'http://www.eulz.co.kr/data/file/gallery/thumb-aa4a7c8b0de90484595e1338394cf3c3_Q7uEZGqV_9f8bc21150695e955b7478796e02a9dc457f5bee_790x790.png',
    description: '면적: 지하2층,지상3층 연면적 51,117m2',
    slug: 'gallery-74'
  },
  {
    id: '7',
    title: '2022 대장동 택지개발지구 자동차관련시설,근린생활시설',
    category: '산업시설/기타',
    imageUrl: 'http://www.eulz.co.kr/data/file/gallery/thumb-aa4a7c8b0de90484595e1338394cf3c3_70mpzMYx_411d275aed7747628848bb1736c74f4344f45d52_790x790.png',
    description: '면적: 규모 : 1114.4㎡',
    slug: 'gallery-7'
  },
  {
    id: '2',
    title: '2022 과천지식정보타운 14BL 지식산업센터',
    category: '일반상업분야/업무시설',
    imageUrl: 'http://www.eulz.co.kr/data/file/gallery/thumb-aa4a7c8b0de90484595e1338394cf3c3_b7KjqEfr_3e52b7b10d73d5b8fee0c1feb2750838796ca47c_790x790.png',
    description: '면적: 78,389㎡',
    slug: 'gallery-2'
  },
  {
    id: '1',
    title: '2022 화양동 지구단위계획구역 협정건축',
    category: '주상복합/공동주택',
    imageUrl: 'http://www.eulz.co.kr/data/file/gallery/thumb-aa4a7c8b0de90484595e1338394cf3c3_b7KjqEfr_3e52b7b10d73d5b8fee0c1feb2750838796ca47c_790x790.png',
    description: '면적: 78,389㎡',
    slug: 'gallery-1'
  },
  {
    id: '38',
    title: '2022 강동구 길동 oo사옥 신축공사',
    category: '일반상업분야/업무시설',
    imageUrl: 'http://www.eulz.co.kr/data/file/gallery/thumb-aa4a7c8b0de90484595e1338394cf3c3_tUnydxeK_3ed114812bff2deb0a054143125af18629738163_790x790.png',
    description: '면적: 지하1층,지상6층 3,000㎡',
    slug: 'gallery-38'
  },
  {
    id: '22',
    title: '2021 화양동 오피스텔,도시형생활주택,근생 신축공사',
    category: '주상복합/공동주택',
    imageUrl: 'http://www.eulz.co.kr/data/file/gallery/thumb-4c4b08fe55623176187a5ab3bc3edeaa_Vn3tRQ2Y_c9c5366d33bbfb4c1c912382402b0dbcc22dee33_790x790.jpg',
    description: '면적: 지하2층 지상12층 4,400㎡',
    slug: 'gallery-22'
  },
  {
    id: '23',
    title: '2020 세종 타운하우스 신축공사',
    category: '주상복합/공동주택',
    imageUrl: 'http://www.eulz.co.kr/data/file/gallery/thumb-aa4a7c8b0de90484595e1338394cf3c3_R63zabO7_4bce7ad3807cca7bce2938f4655459b87a81f8d5_790x790.png',
    description: '면적: 23,000㎡',
    slug: 'gallery-23'
  },
  {
    id: '77',
    title: '군산항 MASTER-PLAN SKETCH',
    category: '산업시설/기타',
    imageUrl: 'http://www.eulz.co.kr/data/file/gallery/thumb-aa4a7c8b0de90484595e1338394cf3c3_l5r0ua6M_1e65c74228cd2dea58bddc0f51015c6034d86594_790x790.jpg',
    description: '면적: ',
    slug: 'gallery-77'
  },
  {
    id: '24',
    title: '2019 덕소 공동주택아파트신축공사',
    category: '주상복합/공동주택',
    imageUrl: 'http://www.eulz.co.kr/data/file/gallery/thumb-aa4a7c8b0de90484595e1338394cf3c3_OlZE3QhL_5d71502d9c194ba18c7ae6903f67a432733e2a69_790x790.jpg',
    description: '면적: 지상45층,지하2층/34,604.37㎡',
    slug: 'gallery-24'
  },
  {
    id: '5',
    title: '2019 화양동 도시형생활주택, 오피스텔 신축공사',
    category: '주상복합/공동주택',
    imageUrl: 'http://www.eulz.co.kr/data/file/gallery/thumb-aa4a7c8b0de90484595e1338394cf3c3_e0aBWV6Q_5f2d85e54c55ab3be8ff82fc34f2f910c7aaac90_790x790.png',
    description: '면적: 2000㎡',
    slug: 'gallery-5'
  },
  {
    id: '59',
    title: '2019 신길동근린시설',
    category: '산업시설/기타',
    imageUrl: 'http://www.eulz.co.kr/data/file/gallery/thumb-aa4a7c8b0de90484595e1338394cf3c3_UrdFMBgk_fecff25adc41569a1bc9923f7976b53fe8e68420_790x790.jpg',
    description: '면적: 지하1층 지상7층㎡',
    slug: 'gallery-59'
  }
];