
export enum UserRole {
  Seeker = 'seeker',
  Provider = 'provider',
}

export enum SlotStatus {
  Available = 'Available',
  Booked = 'Booked',
  UnderReview = 'Under Review',
  Unavailable = 'Unavailable',
}

export interface User {
  id: string;
  email: string;
  password?: string;
  name: string;
  role: UserRole;
  parkingSlots?: string[]; // Array of ParkingSlot IDs
}

export interface ParkingSlot {
  id: string;
  providerId: string;
  address: string;
  location: {
    lat: number;
    lng: number;
  };
  pricePerHour: number;
  photoUrl: string;
  status: SlotStatus;
  availableTimes: { start: string; end:string }[];
  verificationDocs?: string; // a URL or identifier
  idProof?: string; // a URL or identifier
}

export interface Booking {
  id: string;
  slotId: string;
  seekerId: string;
  startTime: Date;
  endTime: Date;
  totalPrice: number;
  qrCodeValue: string;
}

export interface GeolocationState {
    latitude: number | null;
    longitude: number | null;
    error: string | null;
}
