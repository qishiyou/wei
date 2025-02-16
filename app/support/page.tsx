import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Mail, Phone, MessageCircle } from "lucide-react"

export default function SupportPage() {
  const faqs = [
    {
      question: "什么是动态二维码？",
      answer:
        "动态二维码是一种可以在不改变二维码图案的情况下更新目标URL或内容的二维码。这意味着您可以随时修改二维码指向的内容，而无需重新打印或分发新的二维码。",
    },
    {
      question: "如何跟踪二维码的扫描数据？",
      answer:
        "我们提供详细的数据分析仪表板，您可以在那里查看扫描次数、地理位置、使用设备等详细信息。只需登录您的账户，进入&quot;分析&quot;页面即可查看这些数据。",
    },
    {
      question: "支持哪些自定义选项？",
      answer:
        "我们支持多种自定义选项，包括：更改二维码的颜色、添加logo、调整外观样式、选择不同的模板设计等。您可以在创建或编辑二维码时使用这些选项。",
    },
    {
      question: "如何将我的二维码与我的品牌联系起来？",
      answer:
        "您可以通过添加公司logo、使用品牌颜色、选择适合您品牌的模板来个性化您的二维码。此外，我们的高级版本还支持完全自定义二维码的设计。",
    },
    {
      question: "二维码有使用期限吗？",
      answer:
        "静态二维码没有使用期限。对于动态二维码，只要您的账户处于活跃状态，它们就会一直有效。如果您取消订阅，动态二维码可能会停止工作。",
    },
    {
      question: "如何确保我的二维码安全？",
      answer:
        "我们提供多层安全保护，包括防钓鱼检测、恶意URL检查等。此外，您还可以为重要的二维码设置访问密码或地理限制，以增加额外的安全层。",
    },
  ]

  return (
    <main className="flex-1">
      <section className="bg-green-50 py-12 md:py-24">
        <div className="container">
          <h1 className="text-center text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">客户支持中心</h1>
          <p className="mx-auto mt-4 max-w-[700px] text-center text-gray-500 md:text-xl">
            我们随时为您提供帮助，确保您获得最佳的二维码体验
          </p>
          <div className="mx-auto mt-8 flex max-w-md items-center space-x-2">
            <Input type="search" placeholder="搜索问题..." className="flex-1" />
            <Button type="submit" className="bg-green-500 hover:bg-green-600">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">常见问题</h2>
          <Accordion type="single" collapsible className="mx-auto w-full max-w-2xl">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="bg-green-50 py-12 md:py-24">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">联系我们</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="mr-2 h-5 w-5" /> 电子邮件
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>support@qrcodepro.com</p>
                <p className="mt-2 text-sm text-gray-500">24小时内回复</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" /> 电话
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>+86 400-123-4567</p>
                <p className="mt-2 text-sm text-gray-500">周一至周五 9:00-18:00</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="mr-2 h-5 w-5" /> 在线聊天
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>点击右下角图标</p>
                <p className="mt-2 text-sm text-gray-500">24/7 在线支持</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}

