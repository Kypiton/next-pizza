import { Container, Filters, Title, TopBar } from '@/components/shared';
import { ProductCard } from '@/components/shared/product-card';
import { ProductsGroupList } from '@/components/shared/products-group-list';

export default function Home() {
  return (
    <>
      <Container className='mt-10'>
        <Title text='Все пиццы' size='lg' className='font-extrabold' />
      </Container>
      <TopBar />
      <Container className='pb-14 mt-10'>
        <div className='flex gap-[80px]'>
          <div className='w-[250px]'>
            <Filters />
          </div>
          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              <ProductsGroupList
                title={'Пиццы'}
                items={[
                  {
                    id: 1,
                    name: 'Кола-барбекю',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EF9050501F3FA690A64053F5F07626.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: 'Бефстроганов',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EF9C1DAAFCF3529A62947B9522A8FE.avif',
                    price: 650,
                    items: [{ price: 650 }],
                  },
                  {
                    id: 3,
                    name: 'Говядина с песто',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EF12B2F6AFD043932EFBBAF24F90DF.avif',
                    price: 750,
                    items: [{ price: 750 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title={'Завтраки'}
                items={[
                  {
                    id: 1,
                    name: 'Кола-барбекю',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EF9050501F3FA690A64053F5F07626.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: 'Бефстроганов',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EF9C1DAAFCF3529A62947B9522A8FE.avif',
                    price: 650,
                    items: [{ price: 650 }],
                  },
                  {
                    id: 3,
                    name: 'Говядина с песто',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EF12B2F6AFD043932EFBBAF24F90DF.avif',
                    price: 750,
                    items: [{ price: 750 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
