CREATE TABLE "Booking" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "serviceId" TEXT NOT NULL,
    "serviceTitle" TEXT NOT NULL,
    "servicePrice" INTEGER NOT NULL,
    "serviceDuration" TEXT NOT NULL,
    "appointmentAt" TIMESTAMP(3) NOT NULL,
    "customerName" TEXT NOT NULL,
    "customerEmail" TEXT NOT NULL,
    "customerPhone" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'CONFIRMED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "Booking_userId_idx" ON "Booking"("userId");
CREATE INDEX "Booking_appointmentAt_idx" ON "Booking"("appointmentAt");

ALTER TABLE "Booking"
ADD CONSTRAINT "Booking_userId_fkey"
FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
