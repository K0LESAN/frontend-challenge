import Cats from '@/components/cats';
import Container from '@/components/container';
import { catService } from '@/services/cat';

export default async function RootPage() {
  const { data: cats } = await catService.getByPage(1);

  return (
    <Container>
      <Cats cats={cats ? cats.map(({ _id }) => _id) : []} />
    </Container>
  );
}
