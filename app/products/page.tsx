import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Products() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">RENTAL EQUIPMENT OPTIONS</h1>

      <Tabs defaultValue="laptops" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 mb-8">
          <TabsTrigger value="laptops">Laptops</TabsTrigger>
          <TabsTrigger value="desktops">Desktops</TabsTrigger>
          <TabsTrigger value="tablets">Tablets</TabsTrigger>
          <TabsTrigger value="servers">Servers</TabsTrigger>
          <TabsTrigger value="av">Audio Visual</TabsTrigger>
          <TabsTrigger value="networking">Networking</TabsTrigger>
          <TabsTrigger value="printers">Printers</TabsTrigger>
          <TabsTrigger value="accessories">Accessories</TabsTrigger>
        </TabsList>

        <TabsContent value="laptops" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {laptops.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="desktops" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {desktops.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tablets" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tablets.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>

        {/* Other tabs would follow the same pattern */}
      </Tabs>

      <div className="mt-12 text-center">
        <h2 className="text-xl font-semibold mb-4">LOOKING FOR SOMETHING SPECIFIC?</h2>
        <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
          We have a wide range of equipment available for rent. If you don't see what you need, contact us for a custom
          quote.
        </p>
        <Button asChild className="bg-primary hover:bg-primary/90 text-background">
          <Link href="/request">REQUEST A CUSTOM QUOTE</Link>
        </Button>
      </div>
    </div>
  )
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="overflow-hidden bg-background/50 backdrop-blur-sm border-border/20 hover:border-primary/50 transition-colors">
      <div className="aspect-video relative bg-background/30">
        <Image
          src={product.image} // Use the image URL from the product
          alt={product.name}
          fill
          className="object-contain p-4"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="font-semibold mb-2">{product.name}</h3>
        <div className="text-sm text-foreground/70 mb-4">
          <p>{product.description}</p>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xs text-foreground/60">Daily Rate From</p>
            <p className="text-lg font-semibold text-primary">₱{product.dailyRate}</p>
          </div>
          <Button asChild className="bg-primary hover:bg-primary/90 text-background">
            <Link href={`/request?product=${product.id}`}>Rent Now</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}


interface Product {
  id: number
  name: string
  description: string
  dailyRate: string
  category: string
}

const laptops: Product[] = [
  {
    id: 1,
    name: "Dell XPS 15",
    description: '15.6" 4K UHD, Intel Core i7, 32GB RAM, 1TB SSD, NVIDIA GeForce RTX 3050 Ti',
    dailyRate: "4,200.00",
    category: "laptops",
    image: "https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9510/media-gallery/xs9510t_cnb_05000ff090_bk.psd?fmt=png-alpha&pscan=auto&scl=1&hei=320&wid=320&qlt=100,1&resMode=sharp2&size=320,320&chrss=full", // Add image URL here
  },
  {
    id: 2,
    name: 'MacBook Pro 16"',
    description: '16" Retina Display, Apple M1 Pro, 32GB RAM, 1TB SSD',
    dailyRate: "5,300.00",
    category: "laptops",
    image: "https://istore.co.na/cdn/shop/files/MacBook_Pro_14-in_Silver_Pure_Front_Screen__USEN-1_2048x_5000x_18c6d75e-b439-4094-a6ea-03152c791369.webp?v=1687163166", // Add image URL here
  },
  {
    id: 3,
    name: "Lenovo ThinkPad X1 Carbon",
    description: '14" FHD, Intel Core i7, 16GB RAM, 512GB SSD',
    dailyRate: "3,650.00",
    category: "laptops",
    image: "https://p3-ofp.static.pub/ShareResource/na/products/thinkpad/400x300/lenovo-thinkpad-t16-black-01.png", // Add image URL here
  },
]

const desktops: Product[] = [
  {
    id: 4,
    name: "Dell Precision Workstation",
    description: "Intel Xeon, 64GB RAM, 2TB SSD, NVIDIA Quadro RTX 5000",
    dailyRate: "6,700.00",
    category: "desktops",
    image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/workstations/fixed-workstations/precision/pr3680/spi/ng/desktop-precision-3680-black-compare-800x550-right.psd?fmt=png-alpha&wid=800&hei=550", // Add image URL here
  },
  {
    id: 5,
    name: "Apple Mac Studio",
    description: "Apple M1 Max, 64GB RAM, 2TB SSD",
    dailyRate: "8,400.00",
    category: "desktops",
    image: "https://discussions.apple.com/content/attachment/ce575b36-ced6-4976-a208-c29c1665bb2d", // Add image URL here
  },
  {
    id: 6,
    name: "HP Z4 Workstation",
    description: "Intel Core i9, 32GB RAM, 1TB SSD, NVIDIA RTX A4000",
    dailyRate: "6,150.00",
    category: "desktops",
    image: "https://hp.widen.net/content/7oqyporx8i/webp/7oqyporx8i.png?w=320&dpi=72&color=ffffff00", // Add image URL here
  },
]

const tablets: Product[] = [
  {
    id: 7,
    name: 'iPad Pro 12.9"',
    description: '12.9" Liquid Retina XDR display, Apple M1 chip, 256GB',
    dailyRate: "2,500.00",
    category: "tablets",
    image: "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111979_ipad-pro-12-2018.png", // Add image URL here
  },
  {
    id: 8,
    name: "Microsoft Surface Pro 8",
    description: '13" PixelSense Flow display, Intel Core i7, 16GB RAM, 256GB SSD',
    dailyRate: "3,100.00",
    category: "tablets",
    image: "https://aredutech.com/wp-content/uploads/2023/04/Surface-Pro-8-Tab-Only-002.png", // Add image URL here
  },
  {
    id: 9,
    name: "Samsung Galaxy Tab S8 Ultra",
    description: '14.6" Super AMOLED, Snapdragon 8 Gen 1, 12GB RAM, 256GB',
    dailyRate: "2,250.00",
    category: "tablets",
    image: "https://media.flixcar.com/webp/synd-asset/Samsung-112581089-ph-galaxy-tab-s8-ultra-5g-x906-sm-x906bzaextc-534228684--Download-Source--zoom.png", // Add image URL here
  },
]


