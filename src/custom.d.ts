type RootState={
  recordList: RecordItem[];
  // createRecordError: Error | null,
  tagList: Tag[];
  createTagError: Error | null;
  currentTag: Tag | undefined;
}

type RecordItem= {
  tags: Tag[];
  notes: string;
  type: string;
  amount: number;
  createAt?: string;
}

type Tag={
  id: string;
  name: string;
}

// type TagListModel = {
//   data: Tag[]
//   fetch: () => Tag[]
//   create: (name: string) => 'success' | 'duplicated' // 联合类型
//   update: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
//   remove: (id: string) => boolean
//   save: () => void
// }

