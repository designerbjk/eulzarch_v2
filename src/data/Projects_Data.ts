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

// Helper function to get image URL by ID
const getImageUrl = (id: string): string => {
  return `/project_img/${id}.jpg`;
};

export const projects_data: Project[] = [
  {
    id: '86',
    title: '봉평면 재산리 금당마을 "류경희 아트갤러리하우스"',
    category: '산업시설/기타',
    imageUrl: getImageUrl('86'),
    description: '면적: 지하1층,지상2층',
    slug: 'gallery-86'
  },
  {
    id: '85',
    title: '2023 양주시 덕계동 678-3외 3필지 근생 및 도시형생활주택',
    category: '일반상업분야/업무시설',
    imageUrl: getImageUrl('85'),
    description: '면적: 4633.95㎡ 지하1층 지상4층',
    slug: 'gallery-85'
  },
  {
    id: '84',
    title: '2023 퇴촌 도수리 풀빌라 및 글램핑장',
    category: '산업시설/기타',
    imageUrl: getImageUrl('84'),
    description: '면적: 풀빌라 1600㎡(480평 3층 4개동) 글램핑 810㎡(245.8평17개소) 본부동 805㎡(243.45평)',
    slug: 'gallery-84'
  },
  {
    id: '83',
    title: '2023 광희동 단독주택 및 근린생활시설',
    category: '산업시설/기타',
    imageUrl: getImageUrl('83'),
    description: '면적: 200㎡ 지하1층,지상2층',
    slug: 'gallery-83'
  },
  {
    id: '81',
    title: '2022 의정부역 생활형숙박시설',
    category: '일반상업분야/업무시설',
    imageUrl: getImageUrl('81'),
    description: '면적: 14,314.4m2 지하2층, 지상26층 266실',
    slug: 'gallery-81'
  },
  {
    id: '74',
    title: '2022 여주시 물류창고신축공사',
    category: '산업시설/기타',
    imageUrl: getImageUrl('74'),
    description: '면적: 지하2층,지상3층 연면적 51,117m2',
    slug: 'gallery-74'
  },
  {
    id: '7',
    title: '2022 대장동 택지개발지구 자동차관련시설,근린생활시설',
    category: '산업시설/기타',
    imageUrl: getImageUrl('7'),
    description: '면적: 규모 : 1114.4㎡',
    slug: 'gallery-7'
  },
  {
    id: '2',
    title: '2022 과천지식정보타운 14BL 지식산업센터',
    category: '일반상업분야/업무시설',
    imageUrl: getImageUrl('2'),
    description: '면적: 78,389㎡',
    slug: 'gallery-2'
  },
  {
    id: '1',
    title: '2022 화양동 지구단위계획구역 협정건축',
    category: '주상복합/공동주택',
    imageUrl: getImageUrl('1'),
    description: '면적: 78,389㎡',
    slug: 'gallery-1'
  },
  {
    id: '38',
    title: '2022 강동구 길동 oo사옥 신축공사',
    category: '일반상업분야/업무시설',
    imageUrl: getImageUrl('38'),
    description: '면적: 지하1층,지상6층 3,000㎡',
    slug: 'gallery-38'
  },
  {
    id: '22',
    title: '2021 화양동 오피스텔,도시형생활주택,근생 신축공사',
    category: '주상복합/공동주택',
    imageUrl: getImageUrl('22'),
    description: '면적: 지하2층 지상12층 4,400㎡',
    slug: 'gallery-22'
  },
  {
    id: '23',
    title: '2020 세종 타운하우스 신축공사',
    category: '주상복합/공동주택',
    imageUrl: getImageUrl('23'),
    description: '면적: 23,000㎡',
    slug: 'gallery-23'
  },
  {
    id: '77',
    title: '군산항 MASTER-PLAN SKETCH',
    category: '산업시설/기타',
    imageUrl: getImageUrl('77'),
    description: '면적: ',
    slug: 'gallery-77'
  },
  {
    id: '24',
    title: '2019 덕소 공동주택아파트신축공사',
    category: '주상복합/공동주택',
    imageUrl: getImageUrl('24'),
    description: '면적: 지상45층,지하2층/34,604.37㎡',
    slug: 'gallery-24'
  },
  {
    id: '5',
    title: '2019 화양동 도시형생활주택, 오피스텔 신축공사',
    category: '주상복합/공동주택',
    imageUrl: getImageUrl('5'),
    description: '면적: 2000㎡',
    slug: 'gallery-5'
  },
  {
    id: '59',
    title: '2019 신길동근린시설',
    category: '산업시설/기타',
    imageUrl: getImageUrl('59'),
    description: '면적: 지하1층 지상7층㎡',
    slug: 'gallery-59'
  },
  {
    id: '58',
    title: '2019 연희동 다가구주택 신축',
    category: '산업시설/기타',
    imageUrl: getImageUrl('58'),
    description: '면적: 지하1층 지상4층㎡',
    slug: 'gallery-58'
  },
  {
    id: '76',
    title: '제주 노형동 근생',
    category: '일반상업분야/업무시설',
    imageUrl: getImageUrl('76'),
    description: '면적: 지상 10층 지하 2층',
    slug: 'gallery-76'
  },
  {
    id: '40',
    title: '2018 제이씨시스템 사옥',
    category: '일반상업분야/업무시설',
    imageUrl: getImageUrl('40'),
    description: '면적: 지하2층,지상5층 1500평㎡',
    slug: 'gallery-40'
  },
  {
    id: '39',
    title: '2018 마곡택지개발지구 연구단지 메인텍사옥 신축',
    category: '일반상업분야/업무시설',
    imageUrl: getImageUrl('39'),
    description: '면적: 1400평 지하2층,지상10층㎡',
    slug: 'gallery-39'
  },
  {
    id: '75',
    title: '과천지식정보타운 14BL(지식산업센터) 신축',
    category: '일반상업분야/업무시설',
    imageUrl: getImageUrl('75'),
    description: '면적: 지하4층,지상8층 78,389M2(23,712PY)',
    slug: 'gallery-75'
  },
  {
    id: '61',
    title: '2018 봉평면 재산리 금당마을 "류경희아트갤러리하우스…',
    category: '산업시설/기타',
    imageUrl: getImageUrl('61'),
    description: '면적: 지하1층, 지상2층㎡',
    slug: 'gallery-61'
  },
  {
    id: '60',
    title: '2017 종로구 창신동 근린생활시설 및 다가구',
    category: '산업시설/기타',
    imageUrl: getImageUrl('60'),
    description: '면적: 지하1층, 지상7층㎡',
    slug: 'gallery-60'
  },
  {
    id: '41',
    title: '2017 다솔인스트루먼트 사옥',
    category: '일반상업분야/업무시설',
    imageUrl: getImageUrl('41'),
    description: '면적: 지하1층 지상3층 900㎡',
    slug: 'gallery-41'
  },
  {
    id: '25',
    title: '2015 도선동주상복합',
    category: '주상복합/공동주택',
    imageUrl: getImageUrl('25'),
    description: '면적: 60,000㎡',
    slug: 'gallery-25'
  },
  {
    id: '89',
    title: '강일동 다가구주택 부지',
    category: '인테리어',
    imageUrl: getImageUrl('89'),
    description: '면적: 연면적180m2, 지상4층',
    slug: 'gallery-89'
  },
  {
    id: '90',
    title: '화성시 남양 전원주택단지',
    category: '인테리어',
    imageUrl: getImageUrl('90'),
    description: '면적: 연면적 200m2, 지하1층/지상2층',
    slug: 'gallery-90'
  },
  {
    id: '87',
    title: '화성시 남양읍 전원주택단지',
    category: '산업시설/기타',
    imageUrl: getImageUrl('87'),
    description: '면적: 9개동, 지하1층/지상2층',
    slug: 'gallery-87'
  },
  {
    id: '42',
    title: '2015 논현동 폼이공사옥 신축공사',
    category: '일반상업분야/업무시설',
    imageUrl: getImageUrl('42'),
    description: '면적: 지하1층 지상6층 731.48㎡',
    slug: 'gallery-42'
  },
  {
    id: '26',
    title: '2015 도선동주상복합 2',
    category: '주상복합/공동주택',
    imageUrl: getImageUrl('26'),
    description: '면적: 30000㎡',
    slug: 'gallery-26'
  },
  {
    id: '43',
    title: '2012 군자역 상업시설',
    category: '일반상업분야/업무시설',
    imageUrl: getImageUrl('43'),
    description: '면적: 지하1,지상11층 2,000㎡',
    slug: 'gallery-43'
  },
  {
    id: "62",
    title: "2011 반포동 도시형원룸 신축공사",
    category: "산업시설/기타",
    imageUrl: getImageUrl('62'),
    description: "면적: 765.63㎡",
    slug: "gallery-62"
  },
  {
    id: "27",
    title: "2010 자양4재정비촉진지구 도시환경정비사업",
    category: "주상복합/공동주택",
    imageUrl: getImageUrl('27'),
    description: "면적: 지하3층,지상30층 54,523.89㎡",
    slug: "gallery-27"
  },
  {
    id: "21",
    title: "2010 청양 크리스챤 아카데미하우스",
    category: "종교시설",
    imageUrl: getImageUrl('21'),
    description: "면적: 지상2층 240평 795㎡",
    slug: "gallery-21"
  },
  {
    id: "9",
    title: "2010 동서울중앙교회",
    category: "종교시설",
    imageUrl: getImageUrl('9'),
    description: "면적: 지하2/지상5층 2,500평 8,264㎡",
    slug: "gallery-9"
  },
  {
    id: "8",
    title: "2010 장현제일교회(비젼교회)",
    category: "종교시설",
    imageUrl: getImageUrl('8'),
    description: "면적: 지하2/지상4층 1430평 4,730㎡",
    slug: "gallery-8"
  },
  {
    id: "55",
    title: "2010 강동구 업무시설 DMC",
    category: "일반상업분야/업무시설",
    imageUrl: getImageUrl('55'),
    description: "면적: 지하4/지상10층 7074평 23,385㎡",
    slug: "gallery-55"
  },
  {
    id: "50",
    title: "2010 부송동빌딩2",
    category: "일반상업분야/업무시설",
    imageUrl: getImageUrl('50'),
    description: "면적: 지하1/지상5층 433평 1,431㎡",
    slug: "gallery-50"
  },
  {
    id: "44",
    title: "2010 임페리얼펠리스호텔 세부리조트 준공",
    category: "일반상업분야/업무시설",
    imageUrl: getImageUrl('44'),
    description: "면적: 일반호텔163실,분양형스위트397실,풀빌라47실㎡",
    slug: "gallery-44"
  },
  {
    id: "3",
    title: "2010 와동제일교회",
    category: "종교시설",
    imageUrl: getImageUrl('3'),
    description: "면적: 지하1층 ,지상5층 1497평㎡",
    slug: "gallery-3"
  },
  {
    id: "33",
    title: "2009 대림동 지역주택 조합아파트",
    category: "주상복합/공동주택",
    imageUrl: getImageUrl('33'),
    description: "면적: 1,050세대㎡",
    slug: "gallery-33"
  },
  {
    id: "32",
    title: "2009 파주",
    category: "주상복합/공동주택",
    imageUrl: getImageUrl('32'),
    description: "면적: 지하1/지상9~20층 982세대 33,493평 110,721㎡",
    slug: "gallery-32"
  },
  {
    id: "20",
    title: "2009 생명수교회",
    category: "종교시설",
    imageUrl: getImageUrl('20'),
    description: "면적: 지하2/지상3층 625평 2,065㎡",
    slug: "gallery-20"
  },
  {
    id: "19",
    title: "2009 당미교회",
    category: "종교시설",
    imageUrl: getImageUrl('19'),
    description: "면적: 지하1/지상5층 657평 2,173㎡",
    slug: "gallery-19"
  },
  {
    id: "4",
    title: "2009 새에덴교회",
    category: "종교시설",
    imageUrl: getImageUrl('4'),
    description: "면적: 지하1/지상4층 690평 2,280㎡",
    slug: "gallery-4"
  },
  {
    id: "48",
    title: "(주)영진사옥 신축",
    category: "일반상업분야/업무시설",
    imageUrl: getImageUrl('48'),
    description: "면적: 지하3/지상11층 2,520평 8,333㎡",
    slug: "gallery-48"
  },
  {
    id: "28",
    title: "2008 대구주상복합 신축공사",
    category: "주상복합/공동주택",
    imageUrl: getImageUrl('28'),
    description: "면적: 지하5/지상28층 250 세대 최고높이:92.4m 75,032평 22,697㎡",
    slug: "gallery-28"
  },
  {
    id: "30",
    title: "2007 홍은제3주택 재건축정비사업",
    category: "주상복합/공동주택",
    imageUrl: getImageUrl('30'),
    description: "면적: 지하3/지상9~12층 5개동 180세대 30,352㎡",
    slug: "gallery-30"
  },
  {
    id: "29",
    title: "2007\t홍은제6주택 재건축정비사업",
    category: "주상복합/공동주택",
    imageUrl: getImageUrl('29'),
    description: "면적: 지하3/지상13층(평균10층) 6개동 199세대 31,372㎡",
    slug: "gallery-29"
  },
  {
    id: "18",
    title: "2007 목양교회",
    category: "종교시설",
    imageUrl: getImageUrl('18'),
    description: "면적: 지하1/지상4층 1135평 3,754",
    slug: "gallery-18"
  },
  {
    id: "6",
    title: "2007 강남웨딩문화원(대림동)",
    category: "일반상업분야/업무시설",
    imageUrl: getImageUrl('6'),
    description: "면적: 지하1/지상8층 2,743평 9,069㎡",
    slug: "gallery-6"
  },
  {
    id: "53",
    title: "2006 상암동dmc B4-2",
    category: "일반상업분야/업무시설",
    imageUrl: getImageUrl('53'),
    description: "면적: 지하5/지상11층 20,288㎡",
    slug: "gallery-53"
  },
  {
    id: "46",
    title: "2006 임페리얼펠리스 리조트호텔 신축",
    category: "일반상업분야/업무시설",
    imageUrl: getImageUrl('46'),
    description: "면적: 일반호텔163실 리조트397실 풀빌라47실㎡",
    slug: "gallery-46"
  },
  {
    id: "45",
    title: "2006 임페리얼펠리스호텔 세부리조트 계획",
    category: "일반상업분야/업무시설",
    imageUrl: getImageUrl('45'),
    description: "면적: 지하2/지상14층 560실 22,000평 72,727㎡",
    slug: "gallery-45"
  },
  {
    id: "10",
    title: "2006 해성교회",
    category: "종교시설",
    imageUrl: getImageUrl('10'),
    description: "면적: 지하2/지상5층 2000평 6624㎡",
    slug: "gallery-10"
  },
  {
    id: "64",
    title: "2005 강남웨딩문화원 실내리노베이션",
    category: "인테리어",
    imageUrl: getImageUrl('64'),
    description: "면적: 지하1/지상8층 2,743평 9,069㎡",
    slug: "gallery-64"
  },
  {
    id: "63",
    title: "2005 대천 고급주택 준공사진",
    category: "산업시설/기타",
    imageUrl: getImageUrl('63'),
    description: "면적: 지하1/지상2층 98평 327㎡",
    slug: "gallery-63"
  },
  {
    id: "54",
    title: "2005 상암 새천년신도시 택지개발",
    category: "일반상업분야/업무시설",
    imageUrl: getImageUrl('54'),
    description: "면적: 지하5/지상21층 34,348㎡",
    slug: "gallery-54"
  },
  {
    id: "52",
    title: "2005 상암동dmc B6-4",
    category: "일반상업분야/업무시설",
    imageUrl: getImageUrl('52'),
    description: "면적: 지하5/지상16층 59,049㎡",
    slug: "gallery-52"
  },
  {
    id: "49",
    title: "2005 부송동빌딩1",
    category: "일반상업분야/업무시설",
    imageUrl: getImageUrl('49'),
    description: "면적: 지하1/지상6층 750평 2,479㎡",
    slug: "gallery-49"
  },
  {
    id: "36",
    title: "2005\t개봉본동 재개발아파트",
    category: "주상복합/공동주택",
    imageUrl: getImageUrl('36'),
    description: "면적: 지하2/지상15층 498세대 23,000평 76,036㎡",
    slug: "gallery-36"
  },
  {
    id: "17",
    title: "2005 상명교회",
    category: "종교시설",
    imageUrl: getImageUrl('17'),
    description: "면적: 지하1/지상4층 1480㎡",
    slug: "gallery-17"
  },
  {
    id: "73",
    title: "2004 김제문화예술회관",
    category: "산업시설/기타",
    imageUrl: getImageUrl('73'),
    description: "면적: 지하1/지상3층 1,504평 4,974㎡",
    slug: "gallery-73"
  },
  {
    id: "16",
    title: "2004 함께걷는교회",
    category: "종교시설",
    imageUrl: getImageUrl('16'),
    description: "면적: 지하1/지상3층 712평 2,355㎡",
    slug: "gallery-16"
  },
  {
    id: "68",
    title: "2003 영산포주택",
    category: "산업시설/기타",
    imageUrl: getImageUrl('68'),
    description: "면적: 지하1/지상1층 .60평 198㎡",
    slug: "gallery-68"
  },
  {
    id: "35",
    title: "2003 흑석동 동양메이저아파트",
    category: "주상복합/공동주택",
    imageUrl: getImageUrl('35'),
    description: "면적: 7개동 9~17층/423세대 67,315㎡",
    slug: "gallery-35"
  },
  {
    id: "15",
    title: "2003 영광교회",
    category: "종교시설",
    imageUrl: getImageUrl('15'),
    description: "면적: 지하2/지상5층 1300평 4,297㎡",
    slug: "gallery-15"
  },
  {
    id: "11",
    title: "2003 선민교회",
    category: "종교시설",
    imageUrl: getImageUrl('11'),
    description: "면적: 지하1/지상3층 600평 1980㎡",
    slug: "gallery-11"
  },
  {
    id: "66",
    title: "2002 필경제",
    category: "산업시설/기타",
    imageUrl: getImageUrl('66'),
    description: "면적: 지상1층 2009평 690㎡",
    slug: "gallery-66"
  },
  {
    id: "51",
    title: "2002 나루빌 오피스텔 신축",
    category: "일반상업분야/업무시설",
    imageUrl: getImageUrl('51'),
    description: "면적: 지하4/지상12층 1,145평 3,786㎡",
    slug: "gallery-51"
  },
  {
    id: "34",
    title: "2001 홍제동 제일연립 재건축",
    category: "주상복합/공동주택",
    imageUrl: getImageUrl('34'),
    description: "면적: 지하1/지상10층 2,268평 7,500㎡",
    slug: "gallery-34"
  },
  {
    id: "14",
    title: "2001 성도교회",
    category: "종교시설",
    imageUrl: getImageUrl('14'),
    description: "면적: 지하1/지상5층 1976평 6,534㎡",
    slug: "gallery-14"
  },
  {
    id: "13",
    title: "2001 천성교회 계획안",
    category: "종교시설",
    imageUrl: getImageUrl('13'),
    description: "면적: 지하3층지상7층 5400평",
    slug: "gallery-13"
  },
  {
    id: "56",
    title: "2001 한전백악관 웨딩문화원",
    category: "일반상업분야/업무시설",
    imageUrl: getImageUrl('56'),
    description: "면적: 지하1/지상5층 1500평 4,958㎡",
    slug: "gallery-56"
  },
  {
    id: "72",
    title: "2001 김제스파월드",
    category: "산업시설/기타",
    imageUrl: getImageUrl('72'),
    description: "면적: 지하2/지상6층 3,926평 12,979㎡",
    slug: "gallery-72"
  },
  {
    id: "69",
    title: "2000 뉴수원관광호텔 리노베이션",
    category: "산업시설/기타",
    imageUrl: getImageUrl('69'),
    description: "면적: 지하3/지상8층 3,500평 11,570㎡",
    slug: "gallery-69"
  },
  {
    id: "47",
    title: "2000 역삼동 형제빌딩",
    category: "일반상업분야/업무시설",
    imageUrl: getImageUrl('47'),
    description: "면적: 지하1/지상6층 750평 2,479㎡",
    slug: "gallery-47"
  },
  {
    id: "31",
    title: "2000 영남,창성연립재건축조합(공릉동 신도브레뉴)",
    category: "주상복합/공동주택",
    imageUrl: getImageUrl('31'),
    description: "면적: 지하2 지상18층 1개동 138세대 21,310㎡",
    slug: "gallery-31"
  },
  {
    id: "12",
    title: "2000 사당동 성당",
    category: "종교시설",
    imageUrl: getImageUrl('12'),
    description: "면적: 지하1/지상3층 1,840㎡",
    slug: "gallery-12"
  },
  {
    id: "57",
    title: "1999 강남웨딩문화원 신축",
    category: "일반상업분야/업무시설",
    imageUrl: getImageUrl('57'),
    description: "면적: 지하2/지상8층 2.500평 8,264㎡",
    slug: "gallery-57"
  },
  {
    id: "70",
    title: "1993  대전세계박람회회장마스터플랜",
    category: "산업시설/기타",
    imageUrl: getImageUrl('70'),
    description: "면적: 76,000평 250,000㎡",
    slug: "gallery-70"
  },
  {
    id: "65",
    title: "1988 삼성종합기술원",
    category: "산업시설/기타",
    imageUrl: getImageUrl('65'),
    description: "면적: 지하2/지상7층 14,000평 46,586㎡",
    slug: "gallery-65"
  },
  {
    id: "67",
    title: "1985  전시관",
    category: "산업시설/기타",
    imageUrl: getImageUrl('67'),
    description: "면적: 지하1/지상1층 145.8평 481.14㎡",
    slug: "gallery-67"
  },
  {
    id: "80",
    title: "인테리어3",
    category: "인테리어",
    imageUrl: getImageUrl('80'),
    description: "면적: ",
    slug: "gallery-80"
  },
  {
    id: "79",
    title: "인테리어2",
    category: "인테리어",
    imageUrl: getImageUrl('79'),
    description: "면적: ",
    slug: "gallery-79"
  },
  {
    id: "78",
    title: "인테리어1",
    category: "인테리어",
    imageUrl: getImageUrl('78'),
    description: "면적: ",
    slug: "gallery-78"
  }
];