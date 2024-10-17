export type Note = {
  id: string;
  title: string;
  tags: string[];
  content: string;
  lastModified: Date;
};

export const notes: Note[] = [
  {
    id: "0f27aee1-d7da-4f52-8a10-38bf234bb3a5",
    title: "Hello",
    tags: ["Starter", "Work", "Important"],
    content: `Lorem ipsum odor amet, consectetuer adipiscing elit. Amet metus interdum conubia vitae lorem eleifend habitasse. Pulvinar mus duis conubia suspendisse consequat. Diam vestibulum class sagittis parturient, primis rhoncus cursus morbi. Suspendisse fermentum scelerisque fames orci ad tellus est. Facilisis fringilla dignissim tempor diam, dis posuere magna feugiat. Nam sociosqu duis ligula non vestibulum auctor. Vestibulum nisi nulla congue; magna molestie risus. Nec pulvinar velit aptent imperdiet vehicula.

Consequat nec vel mus vehicula dictum. Rutrum senectus habitant hendrerit malesuada ultrices. Dis vestibulum adipiscing taciti faucibus, conubia aliquam hendrerit. Taciti dignissim cras inceptos curabitur class nulla primis ex nisi. Ridiculus augue eleifend facilisis netus scelerisque facilisis finibus. Et massa luctus massa tristique, dis auctor. Ornare porttitor senectus ultricies sit; nisl tristique diam. Sagittis fringilla habitant quis in morbi; vel finibus libero.

Metus maximus venenatis tincidunt est platea ridiculus nostra. Adipiscing himenaeos faucibus dui magnis rhoncus purus. Magnis felis porttitor pharetra fermentum magnis venenatis velit iaculis erat. Ultricies aliquam quisque eu class ridiculus amet curae. Nunc aliquam mauris iaculis at finibus in morbi. Torquent consequat nisl felis commodo cubilia. Ligula vulputate consectetur habitasse lectus ut amet dis.

Aptent massa ex accumsan pretium arcu gravida habitasse nisl luctus. Egestas blandit consequat nec euismod; gravida tincidunt tristique ornare. Arcu inceptos luctus erat bibendum egestas felis pharetra est integer. Platea neque fringilla molestie diam sodales molestie. Enim inceptos ornare conubia mauris mollis eleifend curabitur natoque. Tristique auctor pellentesque orci odio purus tristique iaculis? Hac egestas rhoncus magna risus; diam sagittis. Hendrerit taciti torquent tellus elit aptent accumsan. Lacinia iaculis per felis viverra convallis condimentum. Curabitur sit cras sem posuere ridiculus potenti risus litora ornare.

Rutrum nullam arcu mi, sapien hac velit nostra. Massa velit eleifend class ornare mi egestas fames nisi. Elit vel enim porttitor quam velit ac taciti id. Varius non risus amet efficitur nascetur. Ut commodo id; himenaeos quisque tortor primis. Dapibus consectetur a fermentum sem ultricies libero. Varius lacus libero, natoque nullam montes eu quis fermentum dapibus. Lorem scelerisque diam tincidunt mus ac malesuada vulputate elementum.`, 
  lastModified: new Date(new Date().getTime() - (24 * 60 * 60 * 1000))
  },
  {
    id: "0f27aee1-d7da-4f52-8a10-38bf234bb3a5",
    title: "Hello",
    tags: ["Starter", "Work", "Important"],
    content: `Lorem ipsum odor amet, consectetuer adipiscing elit. Amet metus interdum conubia vitae lorem eleifend habitasse. Pulvinar mus duis conubia suspendisse consequat. Diam vestibulum class sagittis parturient, primis rhoncus cursus morbi. Suspendisse fermentum scelerisque fames orci ad tellus est. Facilisis fringilla dignissim tempor diam, dis posuere magna feugiat. Nam sociosqu duis ligula non vestibulum auctor. Vestibulum nisi nulla congue; magna molestie risus. Nec pulvinar velit aptent imperdiet vehicula.

Consequat nec vel mus vehicula dictum. Rutrum senectus habitant hendrerit malesuada ultrices. Dis vestibulum adipiscing taciti faucibus, conubia aliquam hendrerit. Taciti dignissim cras inceptos curabitur class nulla primis ex nisi. Ridiculus augue eleifend facilisis netus scelerisque facilisis finibus. Et massa luctus massa tristique, dis auctor. Ornare porttitor senectus ultricies sit; nisl tristique diam. Sagittis fringilla habitant quis in morbi; vel finibus libero.

Metus maximus venenatis tincidunt est platea ridiculus nostra. Adipiscing himenaeos faucibus dui magnis rhoncus purus. Magnis felis porttitor pharetra fermentum magnis venenatis velit iaculis erat. Ultricies aliquam quisque eu class ridiculus amet curae. Nunc aliquam mauris iaculis at finibus in morbi. Torquent consequat nisl felis commodo cubilia. Ligula vulputate consectetur habitasse lectus ut amet dis.

Aptent massa ex accumsan pretium arcu gravida habitasse nisl luctus. Egestas blandit consequat nec euismod; gravida tincidunt tristique ornare. Arcu inceptos luctus erat bibendum egestas felis pharetra est integer. Platea neque fringilla molestie diam sodales molestie. Enim inceptos ornare conubia mauris mollis eleifend curabitur natoque. Tristique auctor pellentesque orci odio purus tristique iaculis? Hac egestas rhoncus magna risus; diam sagittis. Hendrerit taciti torquent tellus elit aptent accumsan. Lacinia iaculis per felis viverra convallis condimentum. Curabitur sit cras sem posuere ridiculus potenti risus litora ornare.

Rutrum nullam arcu mi, sapien hac velit nostra. Massa velit eleifend class ornare mi egestas fames nisi. Elit vel enim porttitor quam velit ac taciti id. Varius non risus amet efficitur nascetur. Ut commodo id; himenaeos quisque tortor primis. Dapibus consectetur a fermentum sem ultricies libero. Varius lacus libero, natoque nullam montes eu quis fermentum dapibus. Lorem scelerisque diam tincidunt mus ac malesuada vulputate elementum.`,
    lastModified: new Date(new Date().getTime() - (24 * 60 * 60 * 1000))
  },
  {
    id: "0f27aee1-d7da-4f52-8a10-38bf234bb3a5",
    title: "Hello",
    tags: ["Starter", "Work", "Important"],
    content: `Lorem ipsum odor amet, consectetuer adipiscing elit. Amet metus interdum conubia vitae lorem eleifend habitasse. Pulvinar mus duis conubia suspendisse consequat. Diam vestibulum class sagittis parturient, primis rhoncus cursus morbi. Suspendisse fermentum scelerisque fames orci ad tellus est. Facilisis fringilla dignissim tempor diam, dis posuere magna feugiat. Nam sociosqu duis ligula non vestibulum auctor. Vestibulum nisi nulla congue; magna molestie risus. Nec pulvinar velit aptent imperdiet vehicula.

Consequat nec vel mus vehicula dictum. Rutrum senectus habitant hendrerit malesuada ultrices. Dis vestibulum adipiscing taciti faucibus, conubia aliquam hendrerit. Taciti dignissim cras inceptos curabitur class nulla primis ex nisi. Ridiculus augue eleifend facilisis netus scelerisque facilisis finibus. Et massa luctus massa tristique, dis auctor. Ornare porttitor senectus ultricies sit; nisl tristique diam. Sagittis fringilla habitant quis in morbi; vel finibus libero.

Metus maximus venenatis tincidunt est platea ridiculus nostra. Adipiscing himenaeos faucibus dui magnis rhoncus purus. Magnis felis porttitor pharetra fermentum magnis venenatis velit iaculis erat. Ultricies aliquam quisque eu class ridiculus amet curae. Nunc aliquam mauris iaculis at finibus in morbi. Torquent consequat nisl felis commodo cubilia. Ligula vulputate consectetur habitasse lectus ut amet dis.

Aptent massa ex accumsan pretium arcu gravida habitasse nisl luctus. Egestas blandit consequat nec euismod; gravida tincidunt tristique ornare. Arcu inceptos luctus erat bibendum egestas felis pharetra est integer. Platea neque fringilla molestie diam sodales molestie. Enim inceptos ornare conubia mauris mollis eleifend curabitur natoque. Tristique auctor pellentesque orci odio purus tristique iaculis? Hac egestas rhoncus magna risus; diam sagittis. Hendrerit taciti torquent tellus elit aptent accumsan. Lacinia iaculis per felis viverra convallis condimentum. Curabitur sit cras sem posuere ridiculus potenti risus litora ornare.

Rutrum nullam arcu mi, sapien hac velit nostra. Massa velit eleifend class ornare mi egestas fames nisi. Elit vel enim porttitor quam velit ac taciti id. Varius non risus amet efficitur nascetur. Ut commodo id; himenaeos quisque tortor primis. Dapibus consectetur a fermentum sem ultricies libero. Varius lacus libero, natoque nullam montes eu quis fermentum dapibus. Lorem scelerisque diam tincidunt mus ac malesuada vulputate elementum.`,
    lastModified: new Date(new Date().getTime() - (24 * 60 * 60 * 1000))
  },
  {
    id: "0f27aee1-d7da-4f52-8a10-38bf234bb3a5",
    title: "Hello",
    tags: ["Starter", "Work", "Important"],
    content: `Lorem ipsum odor amet, consectetuer adipiscing elit. Amet metus interdum conubia vitae lorem eleifend habitasse. Pulvinar mus duis conubia suspendisse consequat. Diam vestibulum class sagittis parturient, primis rhoncus cursus morbi. Suspendisse fermentum scelerisque fames orci ad tellus est. Facilisis fringilla dignissim tempor diam, dis posuere magna feugiat. Nam sociosqu duis ligula non vestibulum auctor. Vestibulum nisi nulla congue; magna molestie risus. Nec pulvinar velit aptent imperdiet vehicula.

Consequat nec vel mus vehicula dictum. Rutrum senectus habitant hendrerit malesuada ultrices. Dis vestibulum adipiscing taciti faucibus, conubia aliquam hendrerit. Taciti dignissim cras inceptos curabitur class nulla primis ex nisi. Ridiculus augue eleifend facilisis netus scelerisque facilisis finibus. Et massa luctus massa tristique, dis auctor. Ornare porttitor senectus ultricies sit; nisl tristique diam. Sagittis fringilla habitant quis in morbi; vel finibus libero.

Metus maximus venenatis tincidunt est platea ridiculus nostra. Adipiscing himenaeos faucibus dui magnis rhoncus purus. Magnis felis porttitor pharetra fermentum magnis venenatis velit iaculis erat. Ultricies aliquam quisque eu class ridiculus amet curae. Nunc aliquam mauris iaculis at finibus in morbi. Torquent consequat nisl felis commodo cubilia. Ligula vulputate consectetur habitasse lectus ut amet dis.

Aptent massa ex accumsan pretium arcu gravida habitasse nisl luctus. Egestas blandit consequat nec euismod; gravida tincidunt tristique ornare. Arcu inceptos luctus erat bibendum egestas felis pharetra est integer. Platea neque fringilla molestie diam sodales molestie. Enim inceptos ornare conubia mauris mollis eleifend curabitur natoque. Tristique auctor pellentesque orci odio purus tristique iaculis? Hac egestas rhoncus magna risus; diam sagittis. Hendrerit taciti torquent tellus elit aptent accumsan. Lacinia iaculis per felis viverra convallis condimentum. Curabitur sit cras sem posuere ridiculus potenti risus litora ornare.

Rutrum nullam arcu mi, sapien hac velit nostra. Massa velit eleifend class ornare mi egestas fames nisi. Elit vel enim porttitor quam velit ac taciti id. Varius non risus amet efficitur nascetur. Ut commodo id; himenaeos quisque tortor primis. Dapibus consectetur a fermentum sem ultricies libero. Varius lacus libero, natoque nullam montes eu quis fermentum dapibus. Lorem scelerisque diam tincidunt mus ac malesuada vulputate elementum.`,
    lastModified: new Date(new Date().getTime() - (24 * 60 * 60 * 1000))
  },
  {
    id: "0f27aee1-d7da-4f52-8a10-38bf234bb3a5",
    title: "Hello",
    tags: ["Starter", "Work", "Important"],
    content: `Lorem ipsum odor amet, consectetuer adipiscing elit. Amet metus interdum conubia vitae lorem eleifend habitasse. Pulvinar mus duis conubia suspendisse consequat. Diam vestibulum class sagittis parturient, primis rhoncus cursus morbi. Suspendisse fermentum scelerisque fames orci ad tellus est. Facilisis fringilla dignissim tempor diam, dis posuere magna feugiat. Nam sociosqu duis ligula non vestibulum auctor. Vestibulum nisi nulla congue; magna molestie risus. Nec pulvinar velit aptent imperdiet vehicula.

Consequat nec vel mus vehicula dictum. Rutrum senectus habitant hendrerit malesuada ultrices. Dis vestibulum adipiscing taciti faucibus, conubia aliquam hendrerit. Taciti dignissim cras inceptos curabitur class nulla primis ex nisi. Ridiculus augue eleifend facilisis netus scelerisque facilisis finibus. Et massa luctus massa tristique, dis auctor. Ornare porttitor senectus ultricies sit; nisl tristique diam. Sagittis fringilla habitant quis in morbi; vel finibus libero.

Metus maximus venenatis tincidunt est platea ridiculus nostra. Adipiscing himenaeos faucibus dui magnis rhoncus purus. Magnis felis porttitor pharetra fermentum magnis venenatis velit iaculis erat. Ultricies aliquam quisque eu class ridiculus amet curae. Nunc aliquam mauris iaculis at finibus in morbi. Torquent consequat nisl felis commodo cubilia. Ligula vulputate consectetur habitasse lectus ut amet dis.

Aptent massa ex accumsan pretium arcu gravida habitasse nisl luctus. Egestas blandit consequat nec euismod; gravida tincidunt tristique ornare. Arcu inceptos luctus erat bibendum egestas felis pharetra est integer. Platea neque fringilla molestie diam sodales molestie. Enim inceptos ornare conubia mauris mollis eleifend curabitur natoque. Tristique auctor pellentesque orci odio purus tristique iaculis? Hac egestas rhoncus magna risus; diam sagittis. Hendrerit taciti torquent tellus elit aptent accumsan. Lacinia iaculis per felis viverra convallis condimentum. Curabitur sit cras sem posuere ridiculus potenti risus litora ornare.

Rutrum nullam arcu mi, sapien hac velit nostra. Massa velit eleifend class ornare mi egestas fames nisi. Elit vel enim porttitor quam velit ac taciti id. Varius non risus amet efficitur nascetur. Ut commodo id; himenaeos quisque tortor primis. Dapibus consectetur a fermentum sem ultricies libero. Varius lacus libero, natoque nullam montes eu quis fermentum dapibus. Lorem scelerisque diam tincidunt mus ac malesuada vulputate elementum.`,
    lastModified: new Date(new Date().getTime() - (24 * 60 * 60 * 1000))
  }
]

const notesMap: Map<string, Note> = new Map(notes.map(note => [note.id, note]));

export const findNoteById = (id: string): Note | undefined => {
  return notesMap.get(id);
};