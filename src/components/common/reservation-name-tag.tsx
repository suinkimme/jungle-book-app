interface IReservationNameTag {
  name: string;
}

export const ReservationNameTag = ({ name }: IReservationNameTag) => {
  return (
    <div className="flex items-center space-x-1">
      <span className="text-sm font-medium text-primary">{name}</span>
      <span className="text-sm text-muted-foreground">
        님이 예약하신 시간이에요
      </span>
    </div>
  );
};

export const NotReservationNameTag = () => {
  return (
    <span className="text-sm text-muted-foreground">
      예약 가능한 시간이예요
    </span>
  );
};

export const PastReservationNameTag = () => {
  return (
    <span className="text-sm text-muted-foreground">이미 지난 시간이에요</span>
  );
};
