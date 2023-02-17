const events = [
    {
      start: new Date('Wed, 03 Mar 2021 04:00:15 GMT'),
      end: new Date('Wed, 03 Mar 2021 05:00:15 GMT')
    },
    {
      start: new Date('Wed, 03 Mar 2021 06:00:15 GMT'),
      end: new Date('Wed, 03 Mar 2021 06:30:15 GMT')
    },
    {
      start: new Date('Wed, 03 Mar 2021 08:30:15 GMT'),
      end: new Date('Wed, 03 Mar 2021 09:30:15 GMT')
    },
    {
      start: new Date('Wed, 03 Mar 2021 09:30:15 GMT'),
      end: new Date('Wed, 03 Mar 2021 09:50:15 GMT')
    },
    {
      start: new Date('Wed, 03 Mar 2021 12:50:15 GMT'),
      end: new Date('Wed, 03 Mar 2021 13:10:15 GMT')
    },
    {
      start: new Date('Wed, 03 Mar 2021 11:30:15 GMT'),
      end: new Date('Wed, 03 Mar 2021 12:15:15 GMT')
    },
    {
      start: new Date('Wed, 03 Mar 2021 13:30:15 GMT')
      ,
      end: new Date('Wed, 03 Mar 2021 14:00:15 GMT')
    },
    {
      start: new Date('Wed, 03 Mar 2021 15:00:15 GMT'),
      end: new Date('Wed, 03 Mar 2021 15:30:15 GMT')
    }
  ];
  
  // Sort events by start time
  events.sort((a, b) => a.start - b.start);
  
  // Find gaps between events
  const availableTimes = [];
  for (let i = 0; i < events.length - 1; i++) {
    const currentEventEnd = events[i].end;
    const nextEventStart = events[i + 1].start;
    if (currentEventEnd < nextEventStart) {
      availableTimes.push({ start: currentEventEnd, end: nextEventStart });
    }
  }
  
  console.log(availableTimes);

