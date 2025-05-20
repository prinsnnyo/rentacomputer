"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Products() {
  const [search, setSearch] = useState("")

  const filterProducts = (items: Product[]) =>
    items.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    )

  const filteredLaptops = filterProducts(laptops)
  const filteredDesktops = filterProducts(desktops)
  const filteredTablets = filterProducts(tablets)
  const filteredServers = filterProducts(servers)
  const filteredAv = filterProducts(av)
  const filteredNetworking = filterProducts(networking)
  const filteredPrinters = filterProducts(printers)
  const filteredAccessories = filterProducts(accessories)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">RENTAL EQUIPMENT OPTIONS</h1>

     <div className="mb-6 flex justify-center">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-4 pr-12 py-2 text-black bg-white border-none rounded-full shadow-md focus:outline-none"
            />
            <div className="absolute right-0 top-0 h-full flex items-center pr-3">
              <button className="bg-gray-600 hover:bg-gray-700 text-white rounded-full p-2">
                <Search size={16} />
              </button>
            </div>
          </div>
        </div>

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
            {filteredLaptops.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="desktops" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDesktops.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tablets" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTablets.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="servers" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="av" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAv.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="networking" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNetworking.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="printers" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrinters.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="accessories" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAccessories.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>
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
          src={product.image}
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


const servers: Product[] = [
  {
    id: 10,
    name: "Dell PowerEdge R740",
    description: "Dual Intel Xeon, 128GB RAM, 4TB HDD, RAID Controller",
    dailyRate: "9,500.00",
    category: "servers",
    image: "https://smarket.dellemc-solution.com/content/index.php?mappingId=5dc4ac5e31de9825712c17b4e15b6cb8",
  },
  {
    id: 11,
    name: "HPE ProLiant DL380 Gen10",
    description: "Intel Xeon Silver, 64GB RAM, 2TB SSD, Redundant PSU",
    dailyRate: "8,200.00",
    category: "servers",
    image: "https://assets.ext.hpe.com/is/image/hpedam/s00006498?$superzoom$",
  },
   {
    id: 24,
    name: "Dell PowerEdge R740",
    description: "Intel Xeon Silver, 64GB RAM, 2x1TB SSD, RAID Controller",
    dailyRate: "7,800.00",
    category: "servers",
    image: "https://smarket.dellemc-solution.com/content/index.php?mappingId=5dc4ac5e31de9825712c17b4e15b6cb8",
  },
]

const av: Product[] = [
  {
    id: 12,
    name: "Epson Projector",
    description: "Full HD 1080p, 3,000 Lumens, HDMI Input",
    dailyRate: "1,200.00",
    category: "av",
    image: "https://mediaserver.goepson.com/ImConvServlet/imconv/2f7a7fbbf14af39b2d69bd55393cedf295575501/1200Wx1200H?use=banner&assetDescr=EB-2255U_03",
  },
  {
    id: 13,
    name: "Yamaha Portable PA System",
    description: "Bluetooth, Mixer, Wireless Mic Support",
    dailyRate: "2,000.00",
    category: "av",
    image: "https://galerimusikindonesia.com/image/data/banner/banner%20kategori/Portable%20PA/PA%20System.png",
  },
  {
  id: 20,
  name: "Sony Wireless Microphone System",
  description: "Dual Channel UHF Mic System, Rechargeable",
  dailyRate: "1,400.00",
  category: "av",
  image: "https://www.pngkit.com/png/full/415-4152050_7-ws800-digital-wireless-microphone-systems.png",
}

]

const networking: Product[] = [
  {
    id: 14,
    name: "Cisco Catalyst 2960X",
    description: "48 Ports, Layer 2/3 Switching, PoE",
    dailyRate: "2,750.00",
    category: "networking",
    image: "https://www.cisco.com/c/dam/global/en_au/solutions/small-business/assets/images/connect/ws-c2960x-48fps-l_035.png",
  },
  {
    id: 15,
    name: "Ubiquiti UniFi Access Point",
    description: "Dual Band, 1.7 Gbps Throughput, Mesh Support",
    dailyRate: "1,500.00",
    category: "networking",
    image: "https://cdn.ecomm.ui.com/products/6d5c6141-e2e9-416a-b789-53e59416bb1a/853bc73b-f65b-4e59-a171-75c9a4a4615e.png",
  },
  {
  id: 21,
  name: "TP-Link Gigabit Router",
  description: "AC1750 Dual Band, 3 Antennas, USB Port",
  dailyRate: "800.00",
  category: "networking",
  image: "https://i.pinimg.com/originals/a2/08/d4/a208d457bc7171d2026ff4606472f555.png",
}

]

const printers: Product[] = [
  {
    id: 16,
    name: "HP LaserJet Pro M404n",
    description: "Monochrome, Ethernet, 38 ppm",
    dailyRate: "900.00",
    category: "printers",
    image: "https://globallaser.net/application/files/5415/5965/9681/M404n_R.png",
  },
  {
    id: 17,
    name: "Epson EcoTank L3210",
    description: "All-in-One, Color Ink Tank, USB",
    dailyRate: "1,100.00",
    category: "printers",
    image: "https://megacompuworldjaipur.com/image/cache/catalog/Product/Printer/Epson/L3210-800x500.png",
  },
  {
  id: 22,
  name: "Canon PIXMA G3020",
  description: "Wireless, Ink Tank, Color Printing",
  dailyRate: "1,250.00",
  category: "printers",
  image: "https://www.allprinters.my/prodimages/G3020.jpg",
}

]

const accessories: Product[] = [
  {
    id: 18,
    name: "Logitech MX Master 3",
    description: "Wireless Mouse, USB-C Rechargeable",
    dailyRate: "300.00",
    category: "accessories",
    image: "https://content.presspage.com/uploads/1465/1920_high-resolution-png-mxmaster3sprofilepalegrey.png",
  },
  {
    id: 19,
    name: "Dell USB-C Docking Station",
    description: "Dual Display Support, Power Delivery",
    dailyRate: "450.00",
    category: "accessories",
    image: "https://i.dell.com/is/image/DellContent/content/dam/images/products/electronics-and-accessories/dell/docks-and-stands/ud22/dlud22-cbt-04-bk.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=928&qlt=100,1&resMode=sharp2&size=928,402&chrss=full",
  },
  {
  id: 23,
  name: "Anker Power Bank 20,000mAh",
  description: "Fast Charging, USB-C, Compact",
  dailyRate: "200.00",
  category: "accessories",
  image: "https://www.alphastore.com.kw/wp-content/uploads/2024/06/Anker-Power-Bank-20K-30W-Black-1.png",
}

]

