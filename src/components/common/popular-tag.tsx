export const PopularTag = () => {
  return (
    <span className="text-sm text-destructive">
      자주 예약되는 시간대입니다.
    </span>
  );
};

export const UnpopularTag = () => {
  return (
    <span className="text-sm text-muted-foreground">
      이 시간대는 여유가 있습니다.
    </span>
  );
};
