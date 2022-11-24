export const getComments = async () => {
  return [
    {
      id: "1",
      body: "sallam",
      username: "Ali",
      userId: "1",
      parentId: null,
      createdAt: "2022-11-24T23:00:33.010+02:00",
    },
    {
      id: "2",
      body: "khoobi?",
      username: "Mahdi",
      userId: "2",
      parentId: null,
      createdAt: "2022-11-24T23:00:33.010+02:00",
    },
    {
      id: "3",
      body: "che khabar",
      username: "Mahdi",
      userId: "2",
      parentId: "1",
      createdAt: "2022-11-24T23:00:33.010+02:00",
    },
    {
      id: "4",
      body: "merci",
      username: "Mahdi",
      userId: "2",
      parentId: "2",
      createdAt: "2022-11-24T23:00:33.010+02:00",
    },
  ];
};

export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "Mahdi",
    createdAt: new Date().toISOString(),
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};
