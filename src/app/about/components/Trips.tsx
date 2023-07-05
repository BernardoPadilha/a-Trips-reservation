import { prisma } from '@/lib/prisma';
import React, { useState } from 'react'

const getTrips = async () => {
    const trips = await prisma.trip.findMany({});

    return trips;
};

export const Trips = async () => {
    const data = await getTrips()

    console.log(data)

    return <div>Trips</div>
}