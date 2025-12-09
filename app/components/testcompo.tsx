interface HeroCardType {
  id: number;
  title: string;
  highlight?: string;
  short_description: string;
}

export default function TestCompo({ testData }: { testData: HeroCardType[] }) {
  return (
    <div>{testData && testData.map((t) => <div key={t.id}>{t.title}</div>)}</div>
  );
}
