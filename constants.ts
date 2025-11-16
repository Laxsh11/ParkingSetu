
import { User, ParkingSlot, Booking, UserRole, SlotStatus } from './types';
import { v4 as uuidv4 } from 'uuid';

export const MOCK_USERS: User[] = [
  {
    id: 'user-seeker-1',
    email: 'seeker@example.com',
    password: 'password123',
    name: 'John Doe',
    role: UserRole.Seeker,
  },
  {
    id: 'user-provider-1',
    email: 'provider@example.com',
    password: 'password123',
    name: 'Jane Smith',
    role: UserRole.Provider,
    parkingSlots: ['slot-1', 'slot-2'],
  },
];

export const MOCK_PARKING_SLOTS: ParkingSlot[] = [
  {
    id: 'slot-1',
    providerId: 'user-provider-1',
    address: '123 Main St, San Francisco, CA',
    location: { lat: 37.7749, lng: -122.4194 },
    pricePerHour: 5,
    photoUrl: 'https://picsum.photos/seed/park1/400/300',
    status: SlotStatus.Available,
    availableTimes: [{start: '08:00', end: '20:00'}]
  },
  {
    id: 'slot-2',
    providerId: 'user-provider-1',
    address: '456 Market St, San Francisco, CA',
    location: { lat: 37.79, lng: -122.40 },
    pricePerHour: 7,
    photoUrl: 'https://picsum.photos/seed/park2/400/300',
    status: SlotStatus.Available,
    availableTimes: [{start: '00:00', end: '23:59'}]
  },
  {
    id: 'slot-3',
    providerId: 'user-provider-2', // a provider that doesn't exist yet, for variety
    address: '789 Mission St, San Francisco, CA',
    location: { lat: 37.78, lng: -122.41 },
    pricePerHour: 6,
    photoUrl: 'https://picsum.photos/seed/park3/400/300',
    status: SlotStatus.Available,
    availableTimes: [{start: '10:00', end: '18:00'}]
  },
];

export const MOCK_BOOKINGS: Booking[] = [];
