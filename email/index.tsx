import { Resend } from "resend"

import { Order } from "@/types"

import { SENDER_EMAIL, APP_NAME } from "@/lib/constants"

import PurchaseReceiptEmail from "./purchase-receipt"
// eslint-disable-next-line @typescript-eslint/no-require-imports
require("dotenv").config()

const resend = new Resend(process.env.RESEND_API_KEY as string)

export const sendPurchaseReceipt = async ({ order }: { order: Order }) => {
  await resend.emails.send({
    from: `${APP_NAME} <${SENDER_EMAIL}>`,
    to: order.user.email,
    subject: `Order confirmation ${order.id}`,
    react: <PurchaseReceiptEmail order={order} />,
  })
}
