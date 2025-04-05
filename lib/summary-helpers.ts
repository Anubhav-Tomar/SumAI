export const parseSection = (section: string): { title: string, points: string[] } => {

    // Split the section into lines
    const [title, ...content] = section.split('\n');

    // Clean up the title (remove leading "#" if it exists and trim whitespace)
    const cleanTitle = title.startsWith('#') ? title.substring(1).trim() : title.trim();

    // Initialize an empty array for points
    const points: string[] = [];
    
    // This will store the current point being processed
    let currentPoint = '';

    // Iterate through each line in the content (bullet points and others)
    content.forEach((line) => {
        // Trim each line to remove extra whitespace
        const trimmedLine = line.trim();

        // Check if the line starts with a bullet point (•)
        if (trimmedLine.startsWith('•')) {
            // If there's an existing point being processed, push it to the points array
            if (currentPoint) {
                points.push(currentPoint.trim());
            }
            // Start a new bullet point
            currentPoint = trimmedLine.substring(1).trim();  // Trim the bullet point marker itself
        } else if (!trimmedLine) {
            // If there's an empty line and currentPoint is not empty, add it to points
            if (currentPoint) {
                points.push(currentPoint.trim());
            }
            currentPoint = '';  // Reset the current point
        } else {
            // If the line is a continuation of the current point, append it
            currentPoint += ' ' + trimmedLine;
        }
    });

    // If there's any remaining point, add it at the end
    if (currentPoint) {
        points.push(currentPoint.trim());
    }

    // Return the title and filtered points (removes any undesired lines)
    return {
        title: cleanTitle,
        points: points.filter(
            (point) => point && !point.startsWith('#') && !point.startsWith('[Choose')
        ) as string[],
    };
};


export function parsePoint(point: string) {
    const isNumbered = /^\d+\./.test(point);
    const isMainPoint = /^-/.test(point);
  
    // Replace the Unicode property escape with a simpler
    const emojiRegex = /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]/u;
    const hasEmoji = emojiRegex.test(point);
    const isEmpty = !point.trim();
  
    return { isNumbered, isMainPoint, hasEmoji, isEmpty };
  }
  
  export function parseEmojiPoint(content: string) {
      const cleanContent = content.replace(/^[•]\s*/, '').trim();
    
      const matches = cleanContent.match(/^(\p{Emoji}+)(.+)$/u);
      if (!matches) return null;
    
      const [_, emoji, text] = matches;
      return {
        emoji: emoji.trim(),
        text: text.trim(),
      };
  }