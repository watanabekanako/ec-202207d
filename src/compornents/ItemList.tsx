// import Link from 'next/link';
import useSWR, { useSWRConfig } from 'swr'
import Image from 'next/image'

const fetcher = (url:any)=> fetch(url).then((res) => res.json());
function ItemList() {
  const { mutate } = useSWRConfig()
  const { data, error } = useSWR('http://localhost:8000/items', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
  <table>
    {/* <thead>
        <tr>
            <th>画像</th>
            <th>商品名</th>
            <th>価格</th>
        </tr>
    </thead> */}
    <tbody>
        {data.map((item:any) => {
            return (
                <tr>
                    <img src={item.img}></img>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                </tr>
            )
        })}
    </tbody>
  </table>


  )
}
export default ItemList;
