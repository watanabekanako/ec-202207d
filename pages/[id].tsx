import { useState } from 'react';
import Link from 'next/link';

// import { getStaticProps } from 'next';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
export async function getStaticProps({ params }: any) {
  const res = await fetch(
    `http://localhost:8000/items/${params.id} `
  );
  const item = await res.json();

  return {
    props: {
      items: item,
    },
  };
}

export async function getItemsIds() {
  const items = await fetch('http://localhost:8000/items').then(
    (res) => res.json()
  );

  return items.map((item: { id: string }) => {
    return {
      params: {
        id: item.id.toString(),
      },
    };
  });
}

export async function getStaticPaths() {
  const paths = await getItemsIds();

  return {
    paths,
    fallback: false,
  };
}
export default function ItemCreate({ items }: any) {
  const [nameText, setNameText] = useState(items.name);

  const [descText, setDescText] = useState(items.description);

  const [priceText, setPriceText] = useState(items.price);
  const [imgText, setImgText] = useState(items.img);

  return (
    <form>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <h3 className="text-center">商品詳細</h3>
          <div className="row">
            <div className="col-xs-5">
              <img
                src=""
                className="img-responsive img-rounded item-img-center"
              />
            </div>

            <div className="col-xs-5">
              <div className="bs-component">
                <h4>{nameText}</h4>
                <br />
                <br />
                <p>{descText}</p>
                <p>{imgText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
