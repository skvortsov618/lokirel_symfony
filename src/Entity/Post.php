<?php

namespace App\Entity;

use App\Repository\PostRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @ORM\Entity(repositoryClass=PostRepository::class)
 */
class Post
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=250)
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=250, unique=true)
     */
    private $slug;

    /**
     * @ORM\OneToMany(targetEntity=PostBlock::class, mappedBy="post", orphanRemoval=true, cascade={"persist", "remove"})
     */
    private $body;

    /**
     * @ORM\ManyToMany(targetEntity=Tag::class)
     */
    private $tags;

    /**
     * @ORM\ManyToMany(targetEntity=Category::class)
     */
    private $categories;

    /**
     * @ORM\ManyToOne(targetEntity=Image::class)
     */
    private $cover;

    /**
     * @ORM\Column(type="bigint")
     */
    private $created;

    /**
     * @ORM\Column(type="bigint", nullable=true)
     */
    private $updated;

    /**
     * @ORM\Column(type="boolean")
     */
    private $hidden;

    public function __construct()
    {
        $this->body = new ArrayCollection();
        $this->tags = new ArrayCollection();
        $this->categories = new ArrayCollection();
    }

    public static function newWithParams($title, $slug, $hidden, $cover, $blocks) {
        $new = new Post();
        $new->setTitle($title);
        $new->setSlug($slug);
        $new->setHidden($hidden);
        $new->setCover($cover);
        $new->setCreated('300000');
        foreach ($blocks as $block) {
            $_block = PostBlock::newWithParams($new, $block['type'], $block['text'], $block['images']);
            $new->addBody($_block);
        }
        return $new;
    }

    public function getFullValues() {
        $_blocks = $this->getBody();
        $_body = [];
        foreach ($_blocks as $_block) {
            $_body[] = $_block->getFullValues();
        }
        return [
            'id'=>$this->getId(),
            'title'=>$this->getTitle(),
            'slug'=>$this->getSlug(),
            'created'=>$this->getCreated(),
            'updated'=>$this->getUpdated(),
            'hidden'=>$this->getHidden(),
            'body'=>$_body
        ];
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(string $slug): self
    {
        $this->slug = $slug;

        return $this;
    }

    /**
     * @return Collection|PostBlock[]
     */
    public function getBody(): Collection
    {
        return $this->body;
    }

    public function addBody(PostBlock $body): self
    {
        if (!$this->body->contains($body)) {
            $this->body[] = $body;
            $body->setPost($this);
        }

        return $this;
    }

    public function removeBody(PostBlock $body): self
    {
        if ($this->body->removeElement($body)) {
            // set the owning side to null (unless already changed)
            if ($body->getPost() === $this) {
                $body->setPost(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Tag[]
     */
    public function getTags(): Collection
    {
        return $this->tags;
    }

    public function addTag(Tag $tag): self
    {
        if (!$this->tags->contains($tag)) {
            $this->tags[] = $tag;
        }

        return $this;
    }

    public function removeTag(Tag $tag): self
    {
        $this->tags->removeElement($tag);

        return $this;
    }

    /**
     * @return Collection|Category[]
     */
    public function getCategories(): Collection
    {
        return $this->categories;
    }

    public function addCategory(Category $category): self
    {
        if (!$this->categories->contains($category)) {
            $this->categories[] = $category;
        }

        return $this;
    }

    public function removeCategory(Category $category): self
    {
        $this->categories->removeElement($category);

        return $this;
    }

    public function setCover($cover)
    {
        $this->cover = $cover;
    }

    public function getCover() {
        return $this->cover;
    }

    public function getCreated(): ?string
    {
        return $this->created;
    }

    public function setCreated(string $created): self
    {
        $this->created = $created;

        return $this;
    }

    public function getUpdated(): ?string
    {
        return $this->updated;
    }

    public function setUpdated(?string $updated): self
    {
        $this->updated = $updated;

        return $this;
    }

    public function getHidden(): ?bool
    {
        return $this->hidden;
    }

    public function setHidden(bool $hidden): self
    {
        $this->hidden = $hidden;

        return $this;
    }
    
}
