import Cats from '@/components/cats';
import Container from '@/components/container';
import { catService } from '@/services/cat';

export default async function RootPage() {
  const { data: cats } = await catService.getByPage(1);

  if (!cats) {
    return <div>Котиков не найдено.</div>;
  }

  return (
    <Container>
      <Cats cats={cats.map(({ _id }) => _id)} />
    </Container>
  );
}
