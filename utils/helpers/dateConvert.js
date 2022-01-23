export default function dateConvert(dateobj, format) {
    const year = dateobj.getFullYear();
    const month = `0${dateobj.getMonth() + 1}`.slice(-2);
    const date = `0${dateobj.getDate()}`.slice(-2);
    const hours = `0${dateobj.getHours()}`.slice(-2);
    const minutes = `0${dateobj.getMinutes()}`.slice(-2);
    const seconds = `0${dateobj.getSeconds()}`.slice(-2);
    const day = dateobj.getDay();
    const months = ['january', 'february', 'march', 'april', 'may', 'jun', 'july', 'august', 'september',
      'october', 'november', 'december'];
    const dates = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    let converted_date;
  
    switch (format) {
      case 'YYYY-MM-DD':
        converted_date = `${year}-${month}-${date}`;
        break;
      case 'YYYY-MMM-DD DDD':
        converted_date = `${year}-${months[parseInt(month) - 1]}-${date} ${dates[parseInt(day)]}`;
        break;
      case 'DD MONTH, YYYY':
        converted_date = `${date} ${months[parseInt(month) - 1]}, ${year}`;
        break;
      case 'DD MONTH YYYY':
        converted_date = `${date} ${months[parseInt(month) - 1]} ${year}`;
        break;
      case 'DD MON, YYYY':
        converted_date = `${Number.parseInt(date)} ${months[parseInt(month) - 1].slice(0, 3)}, ${year}`;
        break;
      case 'DDth MON':
        converted_date = `${Number.parseInt(date)}th ${months[parseInt(month) - 1].slice(0, 3)}`;
        break;
      case 'MON DD, YYYY':
        converted_date = `${months[Number.parseInt(month) - 1].slice(0, 3)} ${Number.parseInt(date)}, ${year}`;
        break;
      default:
        converted_date = '';
        break;
    }
  
    return converted_date;
  }
  
