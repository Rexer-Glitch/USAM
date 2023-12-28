import { Container, Events, EventContainer, ImageContainer, TextContainer, Image, Title, Date} from "./styles/events_styles";
export const eventData = [
  {
    id: 0,
    link: "/events/0",
    name: "Education for All Symposium",
    date: "6 Jun 2023",
    imageURL: ""
  },{
    id: 1,
    link: "/events/1",
    name: "Africa's Green Future Expo",
    date: "12 Jul 2023",
    imageURL: ""
  }
]

function Event({to, name, date, imageURL}){
    return <EventContainer to={to}>
        <ImageContainer>
            <Image src={imageURL} alt={`${name} - event`}/>
        </ImageContainer>
        <TextContainer>
            <Title>{name}</Title>
            <Date>{date}</Date>
        </TextContainer>
    </EventContainer>
}

function UpComingEvents({ events }) {
  return (
    <Container>
      <h1>Upcoming Events</h1>
      <Events>
        {events &&
          events.map(({ link, name, date, imageURL }) => (
            <Event to={link} name={name} date={date} imageURL={imageURL} />
          ))}
      </Events>
    </Container>
  );
}

export default UpComingEvents;
