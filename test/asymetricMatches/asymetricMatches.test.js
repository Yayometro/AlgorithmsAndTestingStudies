import { describe, test, it, expect } from "vitest";
import { generateFibonacci } from "../../src/inputString";

// import { v4 as id } from 'uuid';

export class Person {
  constructor(firstName, lastName) {
    this.id = "person-" + window.crypto.randomUUID();
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

describe("", () => {
  it("should create a person with a first name and last name", () => {
    // Esto falla porque falta el id
    // expect(new Person("Lalo", "Villegas")).toEqual({firstName: "Lalo", lastName: "Villegas"})
    // una forma de solucionarlo:
    expect(new Person("Lalo", "Villegas")).toEqual({
      id: expect.stringMatching(/^person-/),
      firstName: "Lalo",
      lastName: "Villegas",
    });
    // Otra forma seria:
    const person = new Person("Grace", "Hopper");
    expect(person).toEqual({
      id: expect.any(String), // Aqui solo busca que haya un string
      firstName: "Grace",
      lastName: "Hopper",
    });
    // But some times the solutions from above aren't stricted enough:
  });

  it("to Contain", () => {
    const strongestAvenger = {
      name: "Thor Odinson",
      age: 1500,
      weapon: "Stormbreaker",
      occupation: "God of Thunder",
    };
    // Debe de simplemente contener lo descrito en el objeto. Es decir no se esperan todos los resultados.
	  expect(strongestAvenger).toMatchObject({
      name: "Thor Odinson",
      weapon: "Stormbreaker",
    });
    // Otra forma de hacerlo:
    expect(strongestAvenger).toEqual(
      expect.objectContaining({
        name: "Thor Odinson",
        weapon: "Stormbreaker",
      })
    );
  });


  it("array contain", () => {
        const avengers = ['Iron Man', 'Captain America', 'Hulk', 'Black Widow'];

        expect(avengers).toEqual(expect.arrayContaining(['Hulk', 'Captain America']));
    
  })
  // En funciones se puede de esta forma
    expect(generateFibonacci.toString()).toContain("const sequence = [0, 1]");
   
});

// Jugar con el objeto viendo que contenga cierta info o exactamente una info

describe("API TEST response", () => {
    it("API response should have at least id, name, timestamp, category and attributes set it as properties.", () => {
        const apiString = JSON.stringify(something)
        const apiRes = JSON.parse(apiString)
        console.log(apiRes)
        expect(apiRes).toMatchObject({
            id: expect.any(String),
            name: expect.any(String),
            timestamp: expect.any(String),
            category: expect.any(String),
            attributes: expect.any(Object)
        })
    })
})

const something = {
	"id": "5",
	"name": "Marker: Version",
	"events": {},
	"eventIds": {},
	"initialEvent": {
		"eventId": "5",
		"eventTime": "2022-07-01T20:28:48.820951669Z",
		"eventType": "MarkerRecorded",
		"version": "0",
		"taskId": "29887307",
		"markerRecordedEventAttributes": {
			"markerName": "Version",
			"details": {
				"change-id": {
					"payloads": [
						{
							"metadata": {
								"encoding": "anNvbi9wbGFpbg=="
							},
							"data": "ImluaXRpYWwgdmVyc2lvbiI="
						}
					]
				},
				"version": {
					"payloads": [
						{
							"metadata": {
								"encoding": "anNvbi9wbGFpbg=="
							},
							"data": "Mw=="
						}
					]
				}
			},
			"workflowTaskCompletedEventId": "4",
			"header": null,
			"failure": null
		},
		"attributes": {
			"type": "markerRecordedEventAttributes",
			"markerName": "Version",
			"details": {
				"change-id": {
					"payloads": [
						{
							"metadata": {
								"encoding": "anNvbi9wbGFpbg=="
							},
							"data": "ImluaXRpYWwgdmVyc2lvbiI="
						}
					]
				},
				"version": {
					"payloads": [
						{
							"metadata": {
								"encoding": "anNvbi9wbGFpbg=="
							},
							"data": "Mw=="
						}
					]
				}
			},
			"workflowTaskCompletedEventId": "4",
			"header": null,
			"failure": null
		},
		"category": "marker",
		"id": "5",
		"name": "MarkerRecorded",
		"timestamp": "2022-07-01 UTC 20:28:48.82"
	},
	"timestamp": "2022-07-01 UTC 20:28:48.82",
	"category": "marker",
	"eventTime": "2022-07-01T20:28:48.820951669Z",
	"attributes": {
		"type": "markerRecordedEventAttributes",
		"markerName": "Version",
		"details": {
			"change-id": {
				"payloads": [
					{
						"metadata": {
							"encoding": "anNvbi9wbGFpbg=="
						},
						"data": "ImluaXRpYWwgdmVyc2lvbiI="
					}
				]
			},
			"version": {
				"payloads": [
					{
						"metadata": {
							"encoding": "anNvbi9wbGFpbg=="
						},
						"data": "Mw=="
					}
				]
			}
		},
		"workflowTaskCompletedEventId": "4",
		"header": null,
		"failure": null
	},
	"eventList": [
		{
			"eventId": "5",
			"eventTime": "2022-07-01T20:28:48.820951669Z",
			"eventType": "MarkerRecorded",
			"version": "0",
			"taskId": "29887307",
			"markerRecordedEventAttributes": {
				"markerName": "Version",
				"details": {
					"change-id": {
						"payloads": [
							{
								"metadata": {
									"encoding": "anNvbi9wbGFpbg=="
								},
								"data": "ImluaXRpYWwgdmVyc2lvbiI="
							}
						]
					},
					"version": {
						"payloads": [
							{
								"metadata": {
									"encoding": "anNvbi9wbGFpbg=="
								},
								"data": "Mw=="
							}
						]
					}
				},
				"workflowTaskCompletedEventId": "4",
				"header": null,
				"failure": null
			},
			"attributes": {
				"type": "markerRecordedEventAttributes",
				"markerName": "Version",
				"details": {
					"change-id": {
						"payloads": [
							{
								"metadata": {
									"encoding": "anNvbi9wbGFpbg=="
								},
								"data": "ImluaXRpYWwgdmVyc2lvbiI="
							}
						]
					},
					"version": {
						"payloads": [
							{
								"metadata": {
									"encoding": "anNvbi9wbGFpbg=="
								},
								"data": "Mw=="
							}
						]
					}
				},
				"workflowTaskCompletedEventId": "4",
				"header": null,
				"failure": null
			},
			"category": "marker",
			"id": "5",
			"name": "MarkerRecorded",
			"timestamp": "2022-07-01 UTC 20:28:48.82"
		}
	],
	"lastEvent": {
		"eventId": "5",
		"eventTime": "2022-07-01T20:28:48.820951669Z",
		"eventType": "MarkerRecorded",
		"version": "0",
		"taskId": "29887307",
		"markerRecordedEventAttributes": {
			"markerName": "Version",
			"details": {
				"change-id": {
					"payloads": [
						{
							"metadata": {
								"encoding": "anNvbi9wbGFpbg=="
							},
							"data": "ImluaXRpYWwgdmVyc2lvbiI="
						}
					]
				},
				"version": {
					"payloads": [
						{
							"metadata": {
								"encoding": "anNvbi9wbGFpbg=="
							},
							"data": "Mw=="
						}
					]
				}
			},
			"workflowTaskCompletedEventId": "4",
			"header": null,
			"failure": null
		},
		"attributes": {
			"type": "markerRecordedEventAttributes",
			"markerName": "Version",
			"details": {
				"change-id": {
					"payloads": [
						{
							"metadata": {
								"encoding": "anNvbi9wbGFpbg=="
							},
							"data": "ImluaXRpYWwgdmVyc2lvbiI="
						}
					]
				},
				"version": {
					"payloads": [
						{
							"metadata": {
								"encoding": "anNvbi9wbGFpbg=="
							},
							"data": "Mw=="
						}
					]
				}
			},
			"workflowTaskCompletedEventId": "4",
			"header": null,
			"failure": null
		},
		"category": "marker",
		"id": "5",
		"name": "MarkerRecorded",
		"timestamp": "2022-07-01 UTC 20:28:48.82"
	},
	"isFailureOrTimedOut": false,
	"isCanceled": false,
	"isTerminated": false
}

