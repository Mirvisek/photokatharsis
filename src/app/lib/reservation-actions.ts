'use server';

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export async function getOffersForReservation() {
    return await prisma.offerServices.findMany({
        select: {
            id: true,
            title: true,
            price: true,
            duration: true,
            imageUrl: true,
            questions: true,
            category: true,
        },
        orderBy: { title: 'asc' }
    });
}

export async function verifyDiscountCode(code: string) {
    const discount = await prisma.discountCode.findUnique({
        where: { code, isActive: true }
    });

    if (!discount) return { valid: false, message: 'Kod nieprawidłowy lub wygasł.' };
    return { valid: true, type: discount.type, value: discount.value, id: discount.id };
}

export async function submitReservation(data: {
    offerId: string;
    date: Date;
    clientName: string;
    clientEmail: string;
    clientPhone: string;
    answers: Record<string, string>;
    discountCodeId?: string;
    finalPrice?: string;
}) {
    try {
        await prisma.reservation.create({
            data: {
                offerId: data.offerId,
                date: data.date,
                clientName: data.clientName,
                clientEmail: data.clientEmail,
                clientPhone: data.clientPhone,
                answers: JSON.stringify(data.answers),
                discountCodeId: data.discountCodeId,
                totalPrice: data.finalPrice,
                status: 'pending'
            }
        });

        // TODO: Send email confirmation here
        // await sendEmail(...)

        return { success: true };
    } catch (error) {
        console.error('Reservation error:', error);
        return { success: false, message: 'Błąd podczas tworzenia rezerwacji.' };
    }
}
