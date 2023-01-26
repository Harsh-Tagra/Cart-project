// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
type objectType ={ Image: string,
  Name: string,
  Color: string,
  Stock: string,
  Price: string,
  Size: string,
  Type: string,
  id: number
 }
type type = {
 data:objectType[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<type>
) {
  res.status(200).json({
    data: [
      {
        Image: "https://media.istockphoto.com/id/1142211733/photo/front-of-sweatshirt-with-hood-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=inMPwtP-ebqhXD9_A3bHETPkyC37x0rFNSLYgf6rLMM=",
        Name: "ysn",
        Color: "black",
        Stock: "in Stock",
        Price: "35",
        Size: "l",
        Type: "hoddie",
        id: 1
      },
      {
        Image: "https://thumbs.dreamstime.com/b/blank-hoodie-sweatshirt-color-grey-front-view-white-background-99734000.jpg",
        Name: "djd",
        Color: "gray",
        Stock: "in Stock",
        Price: "35",
        Size: "xl",
        Type: "hoddie",
        id: 2
      },
      {
        Image: "https://www.redwolf.in/image/cache/catalog/sweatshirts/batman-classic-logo-hoodie-india-1-700x700.jpg",
        Name: "batman",
        Color: "white and gray",
        Stock: "in Stock",
        Price: "35",
        Size: "xxl",
        Type: "hoddie",
        id: 3
      },
      {
        Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb07DO_3ciqSP3C2KGGhTlDZgxSytKBjB1nA&usqp=CAU",
        Name: "gre",
        Color: "grey",
        Stock: "in Stock",
        Price: "35",
        Size: "xxl",
        Type: "hoddie",
        id: 4
      }
    ]
  })
}
