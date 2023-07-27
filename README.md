# Google Webpass Dashboard

### Summary

The Webpass Dashboard is a feature-rich and visually appealing web application that utilizes the latest technologies, including JavaScript, chart.js, and react, to bring you real-time data. An express node backend was also implemented to efficiently serve up the API data. Our dashboard boasts a neubrutalistic design, emphasizing simplicity and functionality. We have included custom analytics to help you gain insights from the data and make informed decisions. Visit http://wpdash.wongstephenk.com/ to discover the Webpass Dashboard..

### Deployed Site

http://wpdash.wongstephenk.com/

### Planned Implementations

- Responsive Design for Mobile
- Data Filtering
- Data Pagination
- Data Export
- Customization options
- Additional Chart Types
- User Auth to save preferences
- Dashboard customization

### Screenshot(s)

![FireShot Capture 002 - Webpass Data Dashboard - wpdash wongstephenk com](https://user-images.githubusercontent.com/20288105/209023251-f31d50b9-ee79-4b65-8e9a-427872a33787.jpg)

### API

The web app retrieves data from a node.js server using Axios. The Api data from the node.js server is produced with Express. Currently, the server is triggered manually, and downloads the data from the Webpass API and stores it in the file system to minimize requests to the Webpass servers. In future updates, we will add a feature that automatically download the Webpass API data on a monthly basis, allowing for more detailed month-to-month analytics

```
[
    {
        "id": 4974,
        "system_id": 2315,
        "address": "1 Alhambra Cir",
        "zip": "33134",
        "active": true,
        "latitude": "25.755731",
        "longitude": "-80.255437",
        "fips": "120860062061001",
        "validated": true,
        "zip4": 4692,
        "unitless": false,
        "created_at": "2021-04-06T06:07:23.000-07:00",
        "updated_at": "2021-06-18T12:29:28.000-07:00",
        "fips_2020": "120860062061001",
        "census_geo_id_2020": "120860062061001",
        "city_state": "Coral Gables, FL",
        "metro_id": 3,
        "address_permutations": [
            {
                "name": "1 alhambra cir"
            },
            {
                "name": "1 alhambra circle"
            }
        ]
    },
    {
        "id": 24,
        "system_id": 16,
        "address": "1 Bluxome St",
        "zip": "94107",
        "active": true,
        "latitude": "37.777436",
        "longitude": "-122.395819",
        "fips": "060750180001033",
        "validated": true,
        "zip4": 5517,
        "unitless": false,
        "created_at": "2019-02-07T16:08:09.000-08:00",
        "updated_at": "2021-06-18T11:20:31.000-07:00",
        "fips_2020": "060750180001033",
        "census_geo_id_2020": "060750180002014",
        "city_state": "San Francisco, CA",
        "metro_id": 1,
        "address_permutations": [
            {
                "name": "1 bluxome street"
            },
            {
                "name": "1 bluxome st"
            }
        ]
    },
]
```

### Notes

- This site is currently hosted on on AWS via Amplified.
- Hosting backend on digital ocean vps via node express server.
