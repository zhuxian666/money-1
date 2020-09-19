type RootState={
  recordList: RecordItem[];
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

