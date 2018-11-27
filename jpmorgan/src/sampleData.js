import Entity from './entity';

export default function sampleData() {
    let sampleEntities = [];
    sampleEntities.push(new Entity('foo', 'B', 0.50, 'SGP', '01 Jan 2016', '02 Jan 2016', 200, 100.25));
    sampleEntities.push(new Entity('Shell', 'B', 0.10, 'USD', '06 Jan 2016', '08 Jan 2016', 400, 80.25));
    sampleEntities.push(new Entity('bar', 'S', 0.22, 'AED', '05 Jan 2016', '07 Jan 2016', 450, 150.5));
    sampleEntities.push(new Entity('Total', 'S', 0.232, 'AED', '09 Jan 2016', '17 Jan 2016', 700, 150.5));
    return sampleEntities
}