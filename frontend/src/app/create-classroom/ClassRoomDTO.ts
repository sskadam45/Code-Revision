export class ClassRoomDTO {
 title?: string ;
 description?: string;
 tags?: string;
 startDate?: string;
 endDate?: string;
 imageUrl?: string;
  category?: string;
  status?: string;
  participants?: ParticipantDTO;
}
export class ParticipantDTO{
  email?: string;
  userName?: string;
}
