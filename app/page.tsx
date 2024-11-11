import { Container, Title, TopBar } from '@/components/shared';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <>
      <Container className='mt-10'>
        <Title text='Все пиццы' size='lg' className='font-extrabold' />
      </Container>
      <TopBar />
      <Container className='pb-14'>
        <div className='flex gap-[60px]'>
          <div className='w-[250px]'>
            <Filters />
          </div>
        </div>
      </Container>
    </>
  );
}
