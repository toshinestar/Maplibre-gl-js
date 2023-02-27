            let R2D = 180 / Math.PI;
            let D2R = Math.PI / 180;
            // 900913 properties.
            let A = 6378137.0;
            let MAXEXTENT = 20037508.342789244;
            function inverse(xy) {
                return[
                    (xy[0] * R2D / A),
                    ((Math.PI * 0.5) - 2.0 * Math.atan(Math.exp(-xy[1]/A))) * R2D
                ];
            }
            function forward(ll){
                var xy = [
                    A * ll[0] * D2R,
                    A * Math.log(Math.tan((Math.PI * 0.25) + (0.5 * ll[1] * D2R)))
                ];
                // if xy value is beyond maxextent (e.g. poles), return maxextent.
                (xy[0] > MAXEXTENT) && (xy[0] = MAXEXTENT);
                (xy[0] < -MAXEXTENT) && (xy[0] = -MAXEXTENT);
                (xy[1] > MAXEXTENT) && (xy[1] = MAXEXTENT);
                (xy[1] < -MAXEXTENT) && (xy[1] = -MAXEXTENT);
                return xy;
            }
                        
            function lonLatToMercator(a_lat,a_lon) {
                var lon = a_lon * 20037508.34 / 180;
                var lat = Math.log(Math.tan((90 + a_lat) * Math.PI / 360)) / (Math.PI / 180);
                lat = lat * 20037508.34 / 180;
                return Math.round(lat)+","+Math.round(lon);
            }