export const initialState = {
  informIndex: [
    {
      id: 1,
      title: '달빛기행 외국인 행사 예매안내',
      content: `10.27(금)~10.31(화) 영·중·일 3개 국어로 운영되며 예매 시작은 10.14(토) 오후 2시부터 입니다.
          이용에 불편함 없으시길 바랍니다.`,
      writer: '문화재청',
      date: new Date(2023, 9, 1).toLocaleDateString(),
    },
    {
      id: 2,
      title: '별빛야행 도슭수라상 메뉴변경',
      content:
        '10.20(금)부터 도슭수라상의 기존메뉴인 완자전이 생선에서 돼지고기로 변경됩니다. <br />이용에 불편함 없으시길 바랍니다.',
      writer: '문화재청',
      date: new Date(2023, 9, 14).toLocaleDateString(),
    },
    {
      id: 3,
      title: '밤의 석조전 테라스 카페 체험 장소변경 안내',
      content:
        '금일 진행 예정이던 테라스 카페 체험 행사가 우천으로 인하여 테라스가 아닌 석조전 내부에서 진행될 예정입니다.',
      writer: '문화재청',
      date: new Date(2023, 9, 20).toLocaleDateString(),
    },
    {
      id: 4,
      title: '사회적 배려 대상자 궁궐 초청 행사 접수 시작!',
      content:
        '10.20(금) 오후 2시부터 접수시작입니다. 경복궁 별빛야행 - 11.01.(수) ~ 11.14.(화) 창덕궁 달빛기행 - 11.01.(수) ~ 11.14.(화)',
      writer: '문화재청',
      date: new Date(2023, 10, 3).toLocaleDateString(),
    },
    {
      id: 5,
      title: '참여대상 현장 추첨 이벤트.',
      content:
        '행사에 참여하는 분들을 대상으로 이벤트를 진행중이니 많은 참여 부탁드립니다',
      writer: '문화재청',
      date: new Date(2023, 10, 5).toLocaleDateString(),
    },
  ],
  searchTerm: '',
  faqIndex: [
    {
      id: 1,
      title: '신청한 참여시간을 다른시간으로 옮겨도 될까요?',
      content:
        '환불이나 양도는 가능하나 타 시간대 교환은 형평성 문제로 힘듭니다.',
    },
    {
      id: 2,
      title:
        '서류가 준비안되어서 할인을 못받았는데 현장에서 서류를 제출하고 할인을 받을 수 있나요?',
      content:
        '현장에서는 본 축제의 관리에만 집중을 하기에 힘듭니다. 보다 자세한 할인 절차에 대한 사항은 문의하기 페이지로 요청해주시길 바랍니다.',
    },
    {
      id: 3,
      title: '공연시간이 어떻게 되나요?',
      content:
        '각 축제의 공연시간은 행사안내 페이지에 자세히 명시되어있기 때문에 확인 부탁드립니다.',
    },
    {
      id: 4,
      title: '미취학 아동과 동반하여 출입이 가능한가요?',
      content: '아동 만8세 미만까지는 보호자 동반 하 출입이 허가됩니다.',
    },
    {
      id: 5,
      title: '우천 시 일정이 어떻게 되나요?',
      content:
        '정상 운행을 합니다. 현장 환불 및 인터넷 환불또한 전액 가능합니다.',
    },
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return {
        ...state,
        informIndex: [
          ...state.informIndex,
          {
            id: state.informIndex.length + 1,
            ...action.payload,
          },
        ],
      };
    case 'EDIT':
      return {
        ...state,
        informIndex: state.informIndex.map((item) =>
          item.id === action.payload.id ? { ...item, ...action.payload } : item,
        ),
      };
    case 'DELETE':
      return {
        ...state,
        informIndex: state.informIndex.filter(
          (item) => item.id !== action.payload,
        ),
      };
    case 'SEARCH':
      return {
        ...state,
        searchTerm: action.payload,
      };
    default:
      return state;
  }
};
